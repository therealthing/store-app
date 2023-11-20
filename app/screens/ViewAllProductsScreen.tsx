import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import useProducts from '../useAllProducts';
import { ProductItem, ProductItemType } from '../components/ProductItem';
import styled from 'styled-components/native';

type ProductItem = {
  item: ProductItemType
}
const ViewAllProductsScreen: React.FC = function() {
    const navigation = useNavigation();

    const renderItem = ({item}: ProductItem) => (
      <ProductItem {...item} onPress={() => navigation.navigate("SingleProduct", {id: item.id})}/>
    )

    const { data, isLoading, isSuccess, isError, error }  = useProducts();

    if(error) {
      console.error(error);
    }
    
    return (
      <SafeAreaView>
        {isLoading && (<View><Text>Loading</Text></View>)}
        {isError && (<View><Text>Error loading product..</Text></View>)}
        <Container>
        {isSuccess && (
          <FlatList 
            data={data}
            renderItem={renderItem}
          />)}
        </Container>
      </SafeAreaView>
    )
  };

 const Container = styled.View`
  background-color: lightgray;
  padding: 4px;
 `;

  export default ViewAllProductsScreen;