import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';
import DataTable from '../components/DataTable';

const UnloadingView = ({ navigation }) => {
  const tableHeaders = [
    { title: 'Docket No' },
    { title: 'Orgn' },
    { title: 'Dstn' },
    { title: 'Saidtocontain' },
    { title: 'Pkgs' },
    { title: 'Godown' },
    { title: 'Private Mark' },
    { title: 'Remarks' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Arrival/Unloading View" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <InputField label="Challan No" />
          </View>
          <View style={styles.flex1}>
            <InputField label="Arrival No" />
          </View>
          <View style={styles.flex1}>
            <InputField label="Arrival Date" />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex3}>
            <InputField label="Vehicle No" />
          </View>
          <View style={styles.flex3}>
            <InputField label="Unloader" />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="search" size={16} color="#fff" style={styles.btnIcon} />
              <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="print" size={16} color="#fff" style={styles.btnIcon} />
              <Text style={styles.btnText}>Print</Text>
            </TouchableOpacity>
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
  row: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10 },
  flex1: { flex: 1, paddingHorizontal: 2 },
  flex3: { flex: 3, paddingHorizontal: 2 },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    marginBottom: 15,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#007bff',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginHorizontal: 2,
  },
  btnIcon: { marginRight: 5 },
  btnText: { color: '#fff', fontSize: 14 },
  tableContainer: {
    flex: 1,
    marginTop: 5,
  }
});

export default UnloadingView;
