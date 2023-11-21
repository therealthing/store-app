
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewAllProductsScreen from './screens/ViewAllProductsScreen';
import SingleProductScreen from './screens/SingleProductScreen';
import AddProductScreen from './screens/AddProductScreen';

const Stack = createNativeStackNavigator();

function HomeNavigator(): JSX.Element {

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ViewAllProductsScreen} options={{title: 'Store'}}/>
            <Stack.Screen name="SingleProduct" component={SingleProductScreen} options={{title: 'Product details'}}/>
            <Stack.Screen name="AddProduct" component={AddProductScreen} options={{title: 'Add a product'}}/>
        </Stack.Navigator>
  );
}

export default HomeNavigator;
