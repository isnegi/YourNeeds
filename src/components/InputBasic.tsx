import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputBasic = (props: any) => {
  const {
    label = 'Default label',
    placeholder = 'Default placeholder',
    keyboardType = 'default',
    maxLength = 10,
    onChange,
    showLabel = false,
    isLoading = false
  } = props;

  return (
    <>
      {showLabel ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        maxLength={maxLength || 10}
        onChangeText={(value) => onChange(value)}
        editable={isLoading}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    borderColor: '#fff',
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 30,
    fontSize: 32,
    textAlign: "center",
  },
});

export default InputBasic;
