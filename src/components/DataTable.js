import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DataTable = ({ headers, data = [], renderRow }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {headers.map((header, index) => (
          <Text key={index} style={[styles.headerText, header.style]}>
            {header.title}
          </Text>
        ))}
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => renderRow(item, index)}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  }
});

export default DataTable;
