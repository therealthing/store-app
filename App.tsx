
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Dimensions,
  Text,
  SafeAreaView,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
};

function SearchScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Search</Text>
    </SafeAreaView>
  )
};

function AccountScreen(): JSX.Element {
    return (
      <SafeAreaView>
        <Text>Account</Text>
      </SafeAreaView>
    )
};

const Tab = createMaterialTopTabNavigator();

function App(): JSX.Element {
  const screenWidth = Dimensions.get('window').width;
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' initialLayout={{width: screenWidth}} tabBarPosition='bottom'>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
