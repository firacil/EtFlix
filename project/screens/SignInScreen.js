// screens/SignInScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign Up</Text>
    </View>
  );
}

A
A
A
A
A
A
A
A

A
A
A
A
A
A
A
A

