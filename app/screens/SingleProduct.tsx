import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import useSingleProduct from '../useSingleProduct';
import styled from 'styled-components/native';

const SingleProductScreen: React.FC = function() {
    const route = useRoute();
    const {id: productId } = route?.params;
    const { data, isLoading, isSuccess }  = useSingleProduct(productId);
    
    return (
      <SafeAreaView>
        
        {isLoading && (<View><Text>Loading</Text></View>)}
        {isSuccess && (
            <Cell>
                <Text>{data.brand}</Text>
                <Text> {data.description}</Text>
                <Container>
                {data.images.map(el => {
                    return (<Image source={{uri: el}} style={{resizeMode: 'center'}} key={el} height={100} width={100}/>)
                })}
                </Container>
            </Cell>
        )}
      </SafeAreaView>
    )
  };

 const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-around;
 `;

export const Cell = styled.View`
  flex: 1 0 300px;
  padding: 10px;
  background-color: rgba(167, 128, 128, 0.3);
  margin: 20px;
  
`;

  export default SingleProductScreen;