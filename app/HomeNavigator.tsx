
import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';


const Stack = createNativeStackNavigator();

function HomeNavigator(): JSX.Element {

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ListScreen} options={{title: 'Store'}}/>
            <Stack.Screen name="SingleProduct" component={() => <><Text>single</Text></>}/>
            <Stack.Screen name="AddProduct" component={() => <><Text>add</Text></>}/>
        </Stack.Navigator>
  );
}

export default HomeNavigator;
