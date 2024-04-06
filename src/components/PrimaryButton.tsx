import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import COLORS from '../theme/colors';

const PrimaryButton = (props: any) => {
  const {
    title = 'Default title',
    a16yLabel = 'Default button',
    color = COLORS.primary,
    onPressHandler = () => console.log('default handler'),
    showLoader = false,
  } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPressHandler} activeOpacity={0.8}>
      <Text style={styles.label}>{title}</Text>
      {showLoader ? <ActivityIndicator size="small" color="#fff" /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    color: '#fff',
    width: '100%',
    padding: 14,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
