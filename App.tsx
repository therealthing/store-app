
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './app/HomeNavigator';
import { AccountScreen} from './app/screens/AccountScreen';
import { SearchScreen } from './app/screens/SearchScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const Tab = createMaterialBottomTabNavigator();
const queryClient = new QueryClient();

function App(): JSX.Element {

  return (
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Search" component={SearchScreen}/>
          <Tab.Screen name="Account" component={AccountScreen}/>
        </Tab.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
  );
}

export default App;
