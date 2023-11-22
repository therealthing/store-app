
import React, { useReducer, createContext, useMemo } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './app/HomeNavigator';
import { SearchScreen } from './app/screens/SearchScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LogInScreen } from './app/screens/LogInScreen';
import { AddProductScreen } from './app/screens/AddProductScreen';
import { AUTH_ENDPOINT, requestOptions } from './app/constants';
import { Alert } from 'react-native';

type AuthContext = {
  signIn: (data: {username: string, password: string}) => void,
  signOut: () => void
}
export const AuthContext = createContext<AuthContext>({signIn: () => {}, signOut: () => {}});
const Tab = createMaterialBottomTabNavigator();
const queryClient = new QueryClient();

function App(): JSX.Element {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const authContext = useMemo(
    () => ({
      signIn: async ({username, password}: {username: string, password: string}) => {
        const authOptions = {
          ...requestOptions,
          method: 'POST',
          body: JSON.stringify({
              username,
              password
          })
      };
      try {
        const { token, message } = await fetch(AUTH_ENDPOINT, authOptions).then(data => data.json());
        
        if(!message) {
          dispatch({ type: 'SIGN_IN', token });
        }
        else {
          Alert.alert(message);
        }
      }
      catch (error) {
        console.error(error);
      }   
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
    }),
    []
  );

  const screens = state.userToken ? (
<>
  <Tab.Screen name="Home" component={HomeNavigator} />
  <Tab.Screen name="Search" component={SearchScreen}/>
  <Tab.Screen name="AddProduct" component={AddProductScreen} options={{title: 'Add Product'}}/>
</>) : 
(<>
  <Tab.Screen name="Home" component={HomeNavigator} />
  <Tab.Screen name="Search" component={SearchScreen}/>
  <Tab.Screen name="Login" component={LogInScreen} options={{title: 'Sign in'}}/>
 </>);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
        <Tab.Navigator initialRouteName="Home">
          {screens}
        </Tab.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </AuthContext.Provider>);
}

export default App;
