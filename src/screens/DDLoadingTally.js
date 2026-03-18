import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';
import DataTable from '../components/DataTable';

const DDLoadingTally = ({ navigation }) => {
  const tableHeaders = [
    { title: 'Docket' },
    { title: 'Wt' },
    { title: 'APkg' },
    { title: 'LPkg' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Today's Delivery" 
        onBack={() => navigation.goBack()} 
        rightIcon={<Icon name="save" size={24} color="#000" />}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Dropdown label="Select Godown" placeholder="--- Select Godown ---" />
          </View>
          <View style={styles.flex1}>
            <InputField label="Hire Amount" value="0" />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex1}>
            <InputField label="Delivery Date" value="05/03/2026" />
          </View>
          <View style={styles.flex1}>
            <InputField label="Vehicle No" />
          </View>
        </View>

        <InputField label="Labour Name" />

        <View style={styles.tableContainer}>
            <DataTable headers={tableHeaders} data={[]} renderRow={() => null} />
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.flex3}>
            <InputField label="Challan No" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <TouchableOpacity style={styles.printButton}>
              <Icon name="print" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 5 },
  row: { flexDirection: 'row', marginHorizontal: -5 },
  flex1: { flex: 1, paddingHorizontal: 5 },
  flex3: { flex: 3, paddingHorizontal: 5 },
  tableContainer: {
    flex: 1,
    marginTop: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  inputSpacing: { marginBottom: 0 },
  printButton: {
    backgroundColor: '#007bff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 0,
  }
});

export default DDLoadingTally;
