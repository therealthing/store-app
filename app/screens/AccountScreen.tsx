import * as React from 'react';
import { useState, useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { PageContainer} from '../components/styles';
import { AUTH_ENDPOINT, ADD_PRODUCT_ENDPOINT, requestOptions } from '../constants';
import { LoginForm } from '../components/LoginForm';
import { AddProductForm } from '../components/AddProduct';
interface UserProfile {
  firstName: string;
  lastName: string;
  token: string;
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

export const AccountScreen: React.FC = function() {
  const [mode, setMode] = useState<'guest' | 'authenticated'>('guest');
  const [token, setToken] = useState<string>('');
  const [name, setName] = useState<string>('');

  useEffect(()=> {
    if(token) {
      setMode('authenticated');
      console.log(`Authenticated with token ${token}`);
    }
  },[token, mode]);
  
  const authenticateUser = async (user:string, pass:string) => {
    const authOptions = {
        ...requestOptions,
        method: 'POST',
        body: JSON.stringify({
            username: user,
            password: pass
        })
    };
    try {
      const { token, firstName, lastName, message } = await fetch(AUTH_ENDPOINT, authOptions).then(data => data.json());
      
      if(!message) {
        setToken(token);
        setName(`${firstName} ${lastName}`);
      }
      else {
        Alert.alert(message);
      }
    }
    catch (error) {
      console.error(error);
    }
  };

    return (<SafeAreaView>
        <PageContainer>
          {mode === 'guest' ? 
          <LoginForm authenticateUser={authenticateUser} /> 
          : <AddProductForm 
              setMode={setMode} 
              setToken={setToken} 
              fullName={name} 
              addProduct={addProduct} 
            />}
        </PageContainer>
      </SafeAreaView>);
};