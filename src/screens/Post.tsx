import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import COLORS from '../theme/colors';

export default function Post(): React.JSX.Element {
  const post = () => {
    console.log('post() called!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>"POST a requirement" Screen</Text>
      <Button onPress={post} title="POST" color={COLORS.primary} accessibilityLabel="Post" />
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
