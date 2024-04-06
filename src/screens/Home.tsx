import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import COLORS from '../theme/colors';

export default function Home(): React.JSX.Element {
  const home = () => {
    console.log('home() called!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>"HOME" Screen</Text>
      <Button onPress={home} title="Home" color={COLORS.primary} accessibilityLabel="Home" />
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
