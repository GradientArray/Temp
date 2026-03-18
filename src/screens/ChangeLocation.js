import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

const ChangeLocation = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Change Location" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Dropdown label="Select Location" value="BLR REGION : IRB" />
        <Button title="Submit" onPress={() => {}} style={styles.submitButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 10 },
  submitButton: { marginTop: 10 }
});

export default ChangeLocation;
