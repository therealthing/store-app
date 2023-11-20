
import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

function HomeNavigator(): JSX.Element {

  return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="SingleProduct" component={() => <><Text>single</Text></>}/>
            <Stack.Screen name="AddProduct" component={() => <><Text>add</Text></>}/>
        </Stack.Navigator>
  );
}

export default HomeNavigator;
