import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

const VehicleArrivalReporting = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Vehicle Arrival Reporting" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Dropdown label="Select Godown" />
          </View>
          <View style={styles.flex1}>
            <InputField label="Vehicle No" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <InputField label="Challan No" />
          </View>
          <View style={styles.flex1}>
            <InputField label="Reporting Time" value="14:17" />
          </View>
        </View>
        <Button title="Submit" onPress={() => {}} style={styles.submitButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 10 },
  row: { flexDirection: 'row', marginHorizontal: -5 },
  flex1: { flex: 1, paddingHorizontal: 5 },
  submitButton: { marginTop: 10 }
});

export default VehicleArrivalReporting;
