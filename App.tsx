
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './app/HomeNavigator';
import AccountScreen from './app/screens/AccountScreen';
import SearchScreen from './app/screens/SearchScreen';


const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {

  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" activeColor='#124cb1'>
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Search" component={SearchScreen}/>
          <Tab.Screen name="Account" component={AccountScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
