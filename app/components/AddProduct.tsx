import React, {useState} from 'react';
import { Text, TextInput, Button } from 'react-native';
import { FormTitle, FieldContainer, FormContainer, LogoutContainer } from '../components/styles';
import type { ProductItemType } from './ProductItem';

export type BaseProduct = Partial<ProductItemType>;

export type AddFormProps = {
    setMode: (arg0: 'guest' | 'authenticated') => void;
    setToken: (arg0: string) => void;
    addProduct: ({price, title}: BaseProduct) => void;
    fullName: string;
};

export const AddProductForm = ({setMode, setToken, addProduct, fullName}: AddFormProps) => {
    const [productTitle, setProductTitle] = useState('');
    const [productPrice, setProductPrice] = useState('');
  
      return (
      <FormContainer>
        <FormTitle>Welcome, {fullName}</FormTitle>
        <Text>Add a new product</Text>
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
        <LogoutContainer>
        <Button title='Log out' onPress={() => {setMode('guest'); setToken(''); }} />
        </LogoutContainer>
        
      </FormContainer>);
    };