import React, { useState } from 'react';
import { Text, TextInput, Button } from 'react-native';
import { FormTitle, FieldContainer, FormContainer } from '../components/styles';

export type LoginFormProps = {
    onSubmit: (data) => void;
};

export const LoginForm = ({onSubmit}: LoginFormProps) => {
    const [newUser, setNewUser] = useState('kminchelle');
    const [newPass, setNewPass] = useState('0lelplR');

    return (
    <FormContainer>
      <FormTitle>Authentication</FormTitle>
      <FieldContainer>
        <Text>Username:</Text>
        <TextInput placeholder="kminchelle" style={{backgroundColor: 'white'}} onChangeText={setNewUser} value={newUser} />
      </FieldContainer>
      <FieldContainer>
        <Text>Password:</Text>
        <TextInput placeholder='0lelplR' secureTextEntry style={{backgroundColor: 'white'}} onChangeText={setNewPass} value={newPass}/>
        <Button title='Log in' onPress={() => onSubmit({username: newUser, password: newPass})} />
      </FieldContainer>  
    </FormContainer>);
  };