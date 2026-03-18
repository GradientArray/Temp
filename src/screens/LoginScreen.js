import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { login } from '../services/authService';

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('Inland World Logistics');

  const handleLogin = async () => {
    // For prototype, we just navigate
    await login(user, password);
    navigation.replace('Main');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Login" showBack={false} />
      <View style={styles.content}>
        <InputField 
          label="User" 
          value={user} 
          onChangeText={setUser} 
        />
        <InputField 
          label="Password" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={true} 
        />
        <InputField 
          label="Company" 
          value={company}
          onChangeText={setCompany}
        />
        
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>2504051000</Text>
            <Text style={styles.versionText}>Latest Version</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  versionContainer: {
    backgroundColor: '#158a17', // Green from the screenshot
    padding: 5,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 2,
  },
  versionText: {
    color: '#fff',
    fontSize: 12,
  }
});

export default LoginScreen;
