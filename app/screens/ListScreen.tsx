import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import useProducts from '../useProducts';
import { ProductItem, ProductItemType } from '../components/ProductItem';
import styled from 'styled-components/native';

type ProductItem = {
  item: ProductItemType
}
const ListScreen: React.FC = function() {
    const navigation = useNavigation();

    const renderItem = ({item}: ProductItem) => (
      <ProductItem {...item} onPress={() => navigation.navigate('SingleProduct', {id: item.id})}/>
    )

    const { data, isLoading, isSuccess }  = useProducts();
    return (
      <SafeAreaView>
        <Text>All products</Text>
        <Container>
        {isLoading && (<View><Text>Loading</Text></View>)}
        {isSuccess && (
          <FlatList 
            data={data}
            renderItem={renderItem}
          />
        )}
        </Container>
      </SafeAreaView>
    )
  };

 const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: white;
 `;

export const Cell = styled.View`
  flex: 1 0 300px;
  padding: 10px;
  background-color: rgba(134, 19, 19, 0.3);
  margin-bottom: 20px;
`;

  export default ListScreen;