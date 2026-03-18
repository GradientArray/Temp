import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';

const IFXLoadingTally = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Loading Tally Scan" 
        onBack={() => navigation.goBack()} 
        rightIcon="save" 
        onRightPress={() => {}} 
      />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <TextInput 
            style={styles.challanInput} 
            placeholder="CHALLAN NO" 
            placeholderTextColor="#6c757d"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={20} color="#fff" />
          </TouchableOpacity>
          <View style={styles.grayBox} />
          <View style={styles.grayBox} />
          <View style={styles.grayBoxRedText}>
            <Text style={styles.redNumber}>0</Text>
          </View>
          <TouchableOpacity style={styles.scanButton}>
            <Text style={styles.scanButtonText}>Scan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          {/* Main content area box as seen in screenshot */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 5 },
  topRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
    height: 40,
  },
  challanInput: {
    flex: 3,
    backgroundColor: '#e9ecef',
    borderColor: '#ced4da',
    borderWidth: 1,
    height: '100%',
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#495057',
  },
  searchButton: {
    flex: 0.8,
    backgroundColor: '#6c757d',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayBox: {
    flex: 2,
    backgroundColor: '#e9ecef',
    borderColor: '#ced4da',
    borderWidth: 1,
    height: '100%',
    marginLeft: 5,
  },
  grayBoxRedText: {
    flex: 2,
    backgroundColor: '#e9ecef',
    borderColor: '#ced4da',
    borderWidth: 1,
    height: '100%',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  redNumber: {
    color: '#d52a3b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  scanButton: {
    flex: 2,
    backgroundColor: '#007bff',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  mainContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  }
});

export default IFXLoadingTally;
