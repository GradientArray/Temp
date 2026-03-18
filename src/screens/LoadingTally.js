import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';

const LoadingTally = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Loading Tally" 
        onBack={() => navigation.goBack()} 
        rightIcon={<Icon name="save" size={24} color="#000" />} // The save icon in header
      />
      
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex2}>
            <InputField label="Manifest No" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex2}>
            <InputField label="Vehicle No" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex3}>
            <Dropdown label="Manifest Origin" value="BLR REGION" />
          </View>
          <View style={styles.flex3}>
            <Dropdown label="Manifest Destination" value="3PL WARI" />
          </View>
          <View style={styles.flex1}>
            <InputField label="Search" style={styles.inputSpacing} />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex4}>
            <InputField 
              label="Docket Destination" 
              style={styles.inputSpacing}
            />
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.searchButton}>
              <Icon name="search" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.flex2}>
            <InputField label="Docket" value="0" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex2}>
            <InputField label="Package" value="0" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex2}>
            <InputField label="Weight" value="0" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <InputField label="Search" style={styles.inputSpacing} />
          </View>
        </View>

        <View style={styles.panelListContainer}>
           <View style={styles.panelList} />
           <View style={styles.panelList} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 5 },
  row: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 5 },
  flex1: { flex: 1, paddingHorizontal: 2 },
  flex2: { flex: 2, paddingHorizontal: 2 },
  flex3: { flex: 3, paddingHorizontal: 2 },
  flex4: { flex: 4, paddingHorizontal: 2 },
  inputSpacing: { marginBottom: 0 },
  actionRow: { flexDirection: 'row', paddingHorizontal: 2, paddingBottom: 5 },
  searchButton: {
    backgroundColor: '#6c757d',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
  panelListContainer: {
    flex: 1,
    marginTop: 5,
  },
  panelList: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 2,
    marginBottom: 5,
  }
});

export default LoadingTally;
