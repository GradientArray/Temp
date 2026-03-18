import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';

const LoadingStock = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Loading Stock" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex2}>
            <Dropdown label="Stock Location" value="BLR REGION" />
          </View>
          <View style={styles.flex3}>
            <InputField 
              label="Docket Destination" 
              style={styles.inputSpacing}
              rightIcon={
                <TouchableOpacity style={styles.searchButton}>
                  <Icon name="search" size={20} color="#fff" />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.flex1}>
            <InputField label="Docket" value="0" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <InputField label="Package" value="0" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <InputField label="Weight" value="0" style={styles.inputSpacing} />
          </View>
        </View>

        {/* Big empty lists / panels from screenshot */}
        <View style={styles.panelList} />
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
    margin: -10, // counteract input padding
    marginLeft: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  panelList: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 2,
    marginTop: 5,
  }
});

export default LoadingStock;
