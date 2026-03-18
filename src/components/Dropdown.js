import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Dropdown = ({ label, value, placeholder, style }) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity style={styles.inputContainer}>
        <Text style={[styles.text, !value && styles.placeholder]}>
          {value || placeholder || 'Select'}
        </Text>
        <Icon name="arrow-drop-down" size={24} color="#666" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  placeholder: {
    color: '#999',
  },
  icon: {
    marginLeft: 5,
  }
});

export default Dropdown;
