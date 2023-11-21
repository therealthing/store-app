import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import {Alert, Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import { ProductItem, ProductItemType } from '../components/ProductItem';
import { PageContainer,PageController, ProductListContainer, PageControlsContainer } from '../components/styles';
import useAddProduct from '../hooks/useAddProduct';

type ProductItem = {
  item: ProductItemType
}
const AddProductScreen: React.FC = function() {
    const [page,setPage] = useState<number>(0);
    const { data, isLoading, isSuccess, isError, error }  = useAddProduct({title: 'mumu'});
    

    if(error) {
      console.error(error);
    }

    return (
      <SafeAreaView>
        <PageContainer>
        
        </PageContainer>
      </SafeAreaView>
    )
  };

  export default AddProductScreen;