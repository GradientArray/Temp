import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';

const PrintManifest = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Print Manifest" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.flex3}>
            <InputField placeholder="MANUAL MANIFEST NO" style={styles.inputSpacing} />
          </View>
          <View style={styles.flex1}>
            <TouchableOpacity style={styles.printButton}>
              <Icon name="print" size={16} color="#fff" style={styles.printIcon} />
              <Text style={styles.printText}>Print</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 10 },
  row: { flexDirection: 'row', alignItems: 'flex-start' },
  flex3: { flex: 3, paddingRight: 5 },
  flex1: { flex: 1 },
  inputSpacing: { marginBottom: 0 },
  printButton: {
    backgroundColor: '#007bff',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  printIcon: { marginRight: 5 },
  printText: { color: '#fff', fontSize: 14 }
});

export default PrintManifest;
