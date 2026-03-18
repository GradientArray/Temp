import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ title, showBack = true, onBack, rightIcon, onRightPress }) => {
  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.logoContainer}>
        {rightIcon ? (
          <TouchableOpacity style={styles.rightButton} onPress={onRightPress}>
            <Icon name={rightIcon} size={20} color="#000" />
          </TouchableOpacity>
        ) : (
          <View style={styles.globePlaceholder} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#d52a3b', // As per screenshot red color
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    elevation: 4, // For Android shadow
  },
  backButton: {
    position: 'absolute',
    left: 10,
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
    flex: 1,
    textAlign: 'center',
  },
  logoContainer: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
  rightButton: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  globePlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#9a1a27', // Darker red placeholder for the logo
  }
});

export default Header;
