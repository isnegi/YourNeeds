import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import COLORS from '../theme/colors';

export default function Notification(): React.JSX.Element {
  const notification = () => {
    console.log('notification() called!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>"NOTIFICATION" Screen</Text>
      <Button
        onPress={notification}
        title="Notification"
        color={COLORS.primary}
        accessibilityLabel="Notification"
      />
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
