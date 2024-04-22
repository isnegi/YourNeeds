import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Settings(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Settings</Text>
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
