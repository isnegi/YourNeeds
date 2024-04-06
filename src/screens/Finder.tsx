import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import COLORS from '../theme/colors';

export default function Finder(): React.JSX.Element {
  const finder = () => {
    console.log('finder() called!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>"FINDER" Screen</Text>
      <Button onPress={finder} title="Finder" color={COLORS.primary} accessibilityLabel="Finder" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  infoText: {
    marginBottom: 16,
  },
});
