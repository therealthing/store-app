
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import SearchScreen from './app/screens/SearchScreen';


const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {

  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen}/>
          <Tab.Screen name="Account" component={AccountScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
