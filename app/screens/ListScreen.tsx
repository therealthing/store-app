import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {FlatList, SafeAreaView, Text,View} from 'react-native';
import useProducts from '../useProducts';
import { ProductItem, ProductItemType } from '../components/ProductItem';
type ProductItem = {
  item: ProductItemType
}
const ListScreen: React.FC = function() {
    const { navigation } = useNavigation();

    const renderItem = ({item}: ProductItem) => (
      <ProductItem {...item} />
    )

    const { data, isLoading, isSuccess }  = useProducts();
    return (
      <SafeAreaView>
        <Text>Home</Text>
        {isLoading && (<View><Text>Loading</Text></View>)}
        {isSuccess && (
          <FlatList 
            data={data}
            renderItem={renderItem}
          />
        )}
      </SafeAreaView>
    )
  };

  export default ListScreen;