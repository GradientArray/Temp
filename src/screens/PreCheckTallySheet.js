import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';
import DataTable from '../components/DataTable';

const PreCheckTallySheet = ({ navigation }) => {
  const tableHeaders = [
    { title: 'Docket No' },
    { title: 'Pkgs' },
    { title: 'Weight' },
    { title: 'Content' },
    { title: 'Dd' }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Pre Check Unloading Tally" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex3}>
            <InputField 
              label="Challan No" 
              placeholder="CHALLAN NO"
              style={styles.inputSpacing}
              rightIcon={
                <TouchableOpacity style={styles.searchButton}>
                  <Icon name="search" size={20} color="#fff" />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.flex2}>
            <InputField label="Vehicle No" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <InputField label="Total Pkgs" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <InputField label="Total Weight" style={styles.inputSpacing} />
          </View>
        </View>

        <View style={styles.tableContainer}>
            <DataTable headers={tableHeaders} data={[]} renderRow={() => null} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 5 },
  row: { flexDirection: 'row', alignItems: 'flex-start' },
  flex1: { flex: 1, paddingHorizontal: 2 },
  flex2: { flex: 2, paddingHorizontal: 2 },
  flex3: { flex: 3, paddingHorizontal: 2 },
  inputSpacing: { marginBottom: 10 },
  searchButton: {
    backgroundColor: '#6c757d',
    padding: 8,
    margin: -10,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableContainer: {
    flex: 1,
    marginTop: 5,
  }
});

export default PreCheckTallySheet;
