import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ratings(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Ratings</Text>
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
