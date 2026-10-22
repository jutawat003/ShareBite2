
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="ค้นหาอาหาร..."
      value={value}
      onChangeText={onChangeText}
      clearButtonMode="while-editing"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE6D8',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 16,
  },
});
