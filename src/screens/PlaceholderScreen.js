import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const PlaceholderScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title={route.name} onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text>Placeholder for {route.name}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PlaceholderScreen;
