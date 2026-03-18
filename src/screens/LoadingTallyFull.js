import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';
import DataTable from '../components/DataTable';

const LoadingTallyFull = ({ navigation }) => {
  const tableHeaders = [
    { title: 'Docket No', style: { color: '#fff' } },
    { title: 'Docket Date', style: { color: '#fff' } },
    { title: 'LPkg', style: { color: '#fff' } },
    { title: 'APkg', style: { color: '#fff' } },
    { title: 'Orgn', style: { color: '#fff' } },
    { title: 'Dstn', style: { color: '#fff' } },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Loading Tally - Full" 
        onBack={() => navigation.goBack()} 
        rightIcon={
            <View style={{flexDirection: 'row'}}>
                <Icon name="cloud-upload" size={24} color="#000" style={{marginRight: 10}}/>
                <Icon name="save" size={24} color="#000" />
            </View>
        }
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
            <Dropdown label="Manifest Destination" value="BLR REGION" />
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
        </View>

        <View style={styles.orangeHeader}>
             {/* Creating a manual dual-row header mimicking the screenshot */}
             <View style={styles.headerRow}>
                 <Text style={styles.headerText}>Docket No</Text>
                 <Text style={styles.headerText}>Docket Date</Text>
                 <Text style={styles.headerText}>LPkg</Text>
                 <Text style={styles.headerText}>APkg</Text>
                 <Text style={styles.headerText}>Orgn</Text>
                 <Text style={styles.headerText}>Dstn</Text>
             </View>
             <View style={styles.headerRow}>
                 <Text style={styles.headerText}>Private Mark</Text>
                 <Text style={styles.headerText}>Cft</Text>
                 <Text style={styles.headerText}>Actual Wt</Text>
             </View>
        </View>
        <View style={styles.panelListContainer}>
            {/* Empty list */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 5 },
  row: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 5 },
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
    borderWidth: 1,
    borderColor: '#ddd'
  },
  orangeHeader: {
    backgroundColor: '#fd7e14', // Exact orange color from snippet
    padding: 5,
    marginTop: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  headerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  }
});

export default LoadingTallyFull;
