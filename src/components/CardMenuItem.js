import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardMenuItem = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Icon name={iconName} size={32} color="#fff" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#007bff', // The bright blue from the screenshots
    flex: 1,
    margin: 4,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  }
});

export default CardMenuItem;
