import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';
import DataTable from '../components/DataTable';

const DCView = ({ navigation }) => {
  const tableHeaders = [
    { title: 'Challan' },
    { title: 'Date' },
    { title: 'Customer' },
    { title: '' }, // For icons
    { title: '' }, // For icons
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Delivery Challan View" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <InputField 
          label="Select Period" 
          value="05/03/2026 - 05/03/2026"
          style={styles.inputSpacing}
          rightIcon={
            <TouchableOpacity style={styles.searchButton}>
              <Icon name="search" size={20} color="#fff" />
            </TouchableOpacity>
          }
        />
        
        <View style={styles.tableContainer}>
            <DataTable headers={tableHeaders} data={[]} renderRow={() => null} />
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.flex3}>
            <InputField label="Docket" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <InputField label="Pkgs" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex2}>
            <InputField 
                label="Weight" 
                style={styles.inputSpacing} 
                rightIcon={
                    <TouchableOpacity style={styles.iconOutlineButton}>
                        <Icon name="search" size={20} color="#666" />
                    </TouchableOpacity>
                }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 5 },
  inputSpacing: { marginBottom: 0 },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: -10,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  tableContainer: {
    flex: 1,
    marginTop: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
    paddingTop: 10,
  },
  flex1: { flex: 1, paddingHorizontal: 2 },
  flex2: { flex: 2, paddingHorizontal: 2 },
  flex3: { flex: 3, paddingHorizontal: 2 },
  iconOutlineButton: {
    padding: 8,
    margin: -10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DCView;
