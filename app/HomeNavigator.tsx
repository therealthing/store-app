
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewAllProductsScreen} from './screens/ViewAllProductsScreen';
import { SingleProductScreen } from './screens/SingleProductScreen';

const Stack = createNativeStackNavigator();

export type StackParamList = {
  List: {};
  SingleProduct: {
    id?: number; 
  };
};
function HomeNavigator(): JSX.Element {

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ViewAllProductsScreen} options={{title: 'Store'}}/>
            <Stack.Screen name="SingleProduct" component={SingleProductScreen} options={{title: 'Product details'}}/>
        </Stack.Navigator>
  );
}

export default HomeNavigator;
