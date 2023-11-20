
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewAllProductsScreen from './screens/ViewAllProductsScreen';
import SingleProductScreen from './screens/SingleProductScreen';


const Stack = createNativeStackNavigator();

const AddProductScreen: React.FC = function() {
  return (
    <SafeAreaView>
      <Text>add</Text>
    </SafeAreaView>
  )
};


function HomeNavigator(): JSX.Element {

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ViewAllProductsScreen} options={{title: 'Store'}}/>
            <Stack.Screen name="SingleProduct" component={SingleProductScreen} options={{title: 'Product details'}}/>
            <Stack.Screen name="AddProduct" component={AddProductScreen}/>
        </Stack.Navigator>
  );
}

export default HomeNavigator;
