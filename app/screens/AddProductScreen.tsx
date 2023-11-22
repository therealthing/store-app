import React, {useContext } from 'react';
import {SafeAreaView,Alert, Button} from 'react-native';
import { AuthContext } from '../../App';
import { LogoutContainer, PageContainer} from '../components/styles';
import { ADD_PRODUCT_ENDPOINT, requestOptions } from '../constants';
import { AddProductForm } from '../components/AddProduct';


export const AddProductScreen = () => {
    const { signOut } = useContext(AuthContext);
    return (<SafeAreaView>
        <PageContainer>
          <AddProductForm addProduct={addProduct} />
          <LogoutContainer>
            <Button onPress={signOut} title="Log out" />
          </LogoutContainer>
        </PageContainer>
      </SafeAreaView>);
}

const addProduct = async ({price,title}: {price: string, title: string}) => {
  const options = {
      ...requestOptions,
      method: 'POST',
      body: JSON.stringify({
          price,
          title
      })
  };
  try {
    const { id, price, title } = await fetch(ADD_PRODUCT_ENDPOINT, options).then(data => data.json());
    Alert.alert(`${id} ${title} - ${price}`);
  } catch(error) {
    console.error(error);
  }
  
};