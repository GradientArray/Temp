import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';

const ManualUnloadingTallyScan = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Un-Loading Tally Scan" 
        onBack={() => navigation.goBack()} 
        rightIcon={<Icon name="save" size={24} color="#000" />}
      />
      
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex3}>
            <InputField 
              placeholder="CHALLAN NO" 
              style={styles.inputSpacing}
              rightIcon={
                <TouchableOpacity style={styles.searchBtn}>
                  <Icon name="search" size={20} color="#fff" />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.flex2}>
            <InputField style={styles.inputSpacing} />
          </View>
          <View style={styles.flex2}>
            <InputField value="0" style={styles.textCenter} />
          </View>
          <View style={styles.flex1}>
            <TouchableOpacity style={styles.scanBtn}>
                <Text style={styles.scanText}>Scan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.panelListContainer}>
           <View style={styles.panelList} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 5 },
  row: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 },
  flex1: { flex: 1, paddingHorizontal: 2 },
  flex2: { flex: 2, paddingHorizontal: 2 },
  flex3: { flex: 3, paddingHorizontal: 2 },
  inputSpacing: { marginBottom: 0 },
  textCenter: { textAlign: 'center' },
  searchBtn: {
    backgroundColor: '#6c757d',
    padding: 10,
    margin: -10,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanBtn: {
    backgroundColor: '#007bff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  scanText: { color: '#fff', fontSize: 12 },
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

export default ManualUnloadingTallyScan;
