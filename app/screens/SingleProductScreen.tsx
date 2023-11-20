import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import useSingleProduct from '../useSingleProduct';
import styled from 'styled-components/native';
import { ProductItem } from '../components/ProductItem';

const SingleProductScreen: React.FC = function() {
    const route = useRoute();
    const {id } = route?.params;
    const { data: product, isLoading, isSuccess, isError }  = useSingleProduct(id);
    
    return (
      <SafeAreaView>
        
        {isLoading && (<View><Text>Loading</Text></View>)}
        {isError && (<View><Text>Error loading details..</Text></View>)}
        {isSuccess && (
            <Cell>
                <ProductItem 
                id={id}
                viewMode="single"
                category={product.category}
                brand={product.brand}
                price={product.price}
                title={product.title}
                description={product.description}
                images={product.images}
                />
            </Cell>
        )}
      </SafeAreaView>
    )
  };

export const Cell = styled.View`
  flex: 1 0 100px;
  padding: 10px;
  background-color: #lightgray;
  margin: 20px;
  
`;

export const ProductTitle = styled.View`
  font-size: 32px;
  font-weight: bold;
`

  export default SingleProductScreen;