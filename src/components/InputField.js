import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText, secureTextEntry, placeholder, style, rightIcon }) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCapitalize="none"
        />
        {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
      </View>
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
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#333',
  },
  iconContainer: {
    padding: 10,
  }
});

export default InputField;
