import React, {useState} from 'react';
import { Text, TextInput, Button } from 'react-native';
import { FormTitle, FieldContainer, FormContainer } from '../components/styles';
import type { ProductItemType } from './ProductItem';

export type BaseProduct = Pick<ProductItemType, 'title' | 'price'>;

export type AddFormProps = {
    addProduct: ({price, title}: BaseProduct) => Promise<void>;
};

export const AddProductForm = ({addProduct}: AddFormProps) => {
    const [productTitle, setProductTitle] = useState('');
    const [productPrice, setProductPrice] = useState('');
  
      return (
      <FormContainer>
        <FormTitle>Add a new product</FormTitle>
        <FieldContainer>
          <Text>Title:</Text>
          <TextInput placeholder="e.g. Best phone 10" style={{backgroundColor: 'white'}} onChangeText={text => setProductTitle(text)} value={productTitle} />
        </FieldContainer>
        <FieldContainer>
          <Text>Price:</Text>
          <TextInput placeholder='e.g. 1000' keyboardType='numeric' style={{backgroundColor: 'white'}} onChangeText={text => setProductPrice(text)} value={productPrice}/>
        </FieldContainer>
        <FieldContainer>
          <Button title='Add Product' onPress={() => addProduct({ price: productPrice, title: productTitle})} />
        </FieldContainer>
        
      </FormContainer>);
    };