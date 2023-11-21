import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useCallback} from 'react';
import {Alert, Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import useProducts from '../hooks/useAllProducts';
import { ProductItem, ProductItemType } from '../components/ProductItem';
import { PageContainer,PageController, ProductListContainer, PageControlsContainer } from '../components/styles';

type ProductItem = {
  item: ProductItemType
}
export const ViewAllProductsScreen: React.FC = function() {
    const navigation = useNavigation();
    
    const renderItem = useCallback(({item}: ProductItem) => (
      <ProductItem {...item} onPress={() => navigation.navigate("SingleProduct", {id: item.id})}/>
    ),[navigation]);

    const [page,setPage] = useState<number>(0);
    const { data, isLoading, isSuccess, isError, error }  = useProducts(page);
    

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