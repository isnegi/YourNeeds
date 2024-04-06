import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import COLORS from '../theme/colors';

const FlatButton = (props: any) => {
  const {
    title = 'Default title',
    color = COLORS.primary,
    onPressHandler = () => console.log('default handler'),
    showLoader = false,
  } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPressHandler} activeOpacity={0.8}>
      <Text style={styles.label}>{title} &nbsp;&nbsp;</Text>
      {showLoader ? <ActivityIndicator size="small" color={COLORS.primary} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // width: '100%',
  },
  label: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatButton;
