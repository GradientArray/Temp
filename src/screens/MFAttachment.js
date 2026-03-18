import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import InputField from '../components/InputField';

const MFAttachment = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="MF Attachment" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.searchContainer}>
            <InputField 
                placeholder="CHALLAN NO" 
                style={styles.inputContainer}
                rightIcon={
                    <TouchableOpacity style={styles.searchButton}>
                        <Icon name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                }
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 10 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  inputContainer: { 
    flex: 1,
    marginBottom: 0
  },
  searchButton: {
    backgroundColor: '#6c757d',
    padding: 10,
    marginRight: -10,
    marginTop: -10, // counteract input internal paddings
    marginBottom: -10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  }
});

export default MFAttachment;
