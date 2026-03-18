import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Button = ({ title, onPress, loading = false, style, color = '#007bff' }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }, style]} 
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2, // The buttons have sharp, slightly rounded corners
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
  }
});

export default Button;
