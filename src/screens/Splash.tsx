import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import COLORS from '../theme/colors';

export default function Splash(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../assets/images/app-icon.png')} />
      <Text style={styles.brandText}>Your Needs</Text>
      <Text style={styles.sloganText}>Find best professionals nearby.</Text>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  tinyLogo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  brandText: {
    fontSize: 32,
    color: '#fff',
  },
  sloganText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#fff',
  },
});
