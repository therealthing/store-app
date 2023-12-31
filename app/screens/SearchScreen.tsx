import * as React from 'react';
import { useState, useCallback } from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import useSearchProducts from '../hooks/useSearchProducts';
import debounce from 'lodash/debounce';
import { useNavigation } from '@react-navigation/native';
import { ProductItem, ProductItemType } from '../components/ProductItem';
import { SearchBarContainer, PageContainer, ProductListContainer } from '../components/styles';

type ProductItem = {
  item: ProductItemType
}

export const SearchScreen: React.FC = function() {
    const [keyword, setKeyword] = useState('');
    const { data, isLoading, isSuccess, isError, error }  = useSearchProducts(keyword);
    const navigation = useNavigation();

    const renderItem = useCallback(({item}: ProductItem) => (
      <ProductItem {...item} onPress={() => navigation.navigate("SingleProduct", {id: item.id})}/>
    ),[navigation]);

    const keyExtractor = (item: ProductItemType) => item.id.toString();

    const debouncedOnTyping = debounce(setKeyword, 500);

    if(error) {
      console.log(error);
    }

    return (
      <SafeAreaView>
        <PageContainer>
        <SearchBarContainer 
          placeholder='type here' 
          clearButtonMode='always' 
          autoCorrect={false} 
          autoCapitalize={'none'}
          autoFocus
          onChangeText={(keyword) => debouncedOnTyping(keyword)}
          >
          </SearchBarContainer>
          <ProductListContainer>
                {isLoading ?? <Text>Loading results</Text>}
                {isError ?? <Text>loading error</Text>}
                {isSuccess && data?.length ? <FlatList
                    data={data}
                    keyExtractor={keyExtractor}
                    maxToRenderPerBatch={6}
                    removeClippedSubviews={true}
                    windowSize={3}
                    renderItem={renderItem} />: <Text>No results for "{keyword}"</Text>}
              </ProductListContainer>
        </PageContainer>
      </SafeAreaView>
    )
};