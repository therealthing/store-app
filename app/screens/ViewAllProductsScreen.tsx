import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import {Alert, Button, FlatList, SafeAreaView, Text, View} from 'react-native';
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
    const [page,setPage] = useState<number>(0);
    const { data, isLoading, isSuccess, isError, error, isFetching }  = useProducts(page);
    

    if(error) {
      console.error(error);
    }

    return (
      <SafeAreaView>
        {isLoading && (<View><Text>Loading</Text></View>)}
        {isError && (<View><Text>Error loading product..</Text></View>)}
        <PageContainer>
        {isSuccess && (
            <>
              <PageControlsContainer>
                <PageController onPress={() => page > 0 ? setPage(page - 1) : Alert.alert('no more products') } title="Previous page" />
                <Button onPress={() => setPage(page + 1) } title="Next page" />
              </PageControlsContainer>
              <ProductListContainer>
                <FlatList
                    data={data}
                    renderItem={renderItem} />
              </ProductListContainer>
              </>
              )}
        </PageContainer>
      </SafeAreaView>
    )
  };
const ProductListContainer = styled.View`
  flex-basis:100%;
`;

const PageControlsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 40px;
  line-height: 40px;
`;

const PageController = styled.Button`
  display: flex; 
  font-size: 12px;
  padding: 0 4px 0 4px;
  color: darkgray;
`;

 const PageContainer = styled.View`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  padding: 4px;
 `;

  export default ViewAllProductsScreen;