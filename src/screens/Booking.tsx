import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import COLORS from '../theme/colors';

export default function Booking(): React.JSX.Element {
  const booking = () => {
    console.log('booking() called!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>"Booking" Screen</Text>
      <Button
        onPress={booking}
        title="Booking"
        color={COLORS.primary}
        accessibilityLabel="Booking"
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
