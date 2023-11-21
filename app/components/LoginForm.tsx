import React, { useState } from 'react';
import { Text, TextInput, Button } from 'react-native';
import { FormTitle, FieldContainer, FormContainer } from '../components/styles';

export type LoginFormProps = {
    authenticateUser: (user:string, pass:string) => void;
};

export const LoginForm = ({authenticateUser}: LoginFormProps) => {
    const [newUser, setNewUser] = useState('kminchelle');
    const [newPass, setNewPass] = useState('0lelplR');

    return (
    <FormContainer>
      <FormTitle>Authentication</FormTitle>
      <FieldContainer>
        <Text>Username:</Text>
        <TextInput placeholder="kminchelle" style={{backgroundColor: 'white'}} onChangeText={text => setNewUser(text)} value={newUser} />
      </FieldContainer>
      <FieldContainer>
        <Text>Password:</Text>
        <TextInput placeholder='0lelplR' secureTextEntry style={{backgroundColor: 'white'}} onChangeText={text => setNewPass(text)} value={newPass}/>
        <Button title='Log in' onPress={() => authenticateUser(newUser, newPass)}/>
      </FieldContainer>  
    </FormContainer>);
  };