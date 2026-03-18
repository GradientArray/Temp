import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';

const UnloadingTally = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Unloading Tally" 
        onBack={() => navigation.goBack()} 
        rightIcon={<Icon name="save" size={24} color="#000" />}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex3}>
            <InputField 
              placeholder="CHALLAN N"
              style={styles.inputSpacing}
              rightIcon={
                <TouchableOpacity style={styles.searchButton}>
                  <Icon name="search" size={20} color="#fff" />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.flex2}>
            <InputField style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <InputField value="0" style={[styles.inputSpacing, styles.textCenter]} />
          </View>
          <View style={styles.flex1}>
            <InputField value="0" style={[styles.inputSpacing, styles.textCenter]} />
          </View>
          <View style={styles.flex2}>
            <InputField style={styles.inputSpacing} />
          </View>
        </View>

        <View style={styles.legendRow}>
            <View style={[styles.legendBox, { backgroundColor: '#aed1ee' }]} />
            <Text style={styles.legendText}>{'< 1 Ton'}</Text>
            <View style={[styles.legendBox, { backgroundColor: '#ffe9bd' }]} />
            <Text style={styles.legendText}>Door Delivery</Text>
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
  row: { flexDirection: 'row', alignItems: 'flex-start' },
  flex1: { flex: 1, paddingHorizontal: 2 },
  flex2: { flex: 2, paddingHorizontal: 2 },
  flex3: { flex: 3, paddingHorizontal: 2 },
  inputSpacing: { marginBottom: 5 },
  textCenter: { textAlign: 'center' },
  searchButton: {
    backgroundColor: '#007bff', // blue in this screenshot
    padding: 8,
    margin: -10,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendBox: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
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

export default UnloadingTally;
