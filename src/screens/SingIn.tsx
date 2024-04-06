import React, { useState } from 'react';
import { Image, Linking, StyleSheet, View } from 'react-native';
import Section from '../components/Section';
import InputBasic from '../components/InputBasic';
import COLORS from '../theme/colors';
import { Button, Text } from 'react-native-paper';

export default function SignIn({ navigation }): React.JSX.Element {
  const [phone, setPhone] = useState('');
  const [isLoading, setLoading] = useState(false);

  const signIn = () => {
    console.log('signIn() called!' + phone);
    navigation.navigate('Verify');
  };

  return (
    <View style={styles.layout}>
      <View style={styles.box}>
        <View style={styles.upperSection}>
          <Image style={styles.tinyLogo} source={require('../assets/images/app-icon.png')} />
          <Text variant="headlineSmall">Your Needs</Text>
          <Text variant="bodyLarge" style={styles.iText}>
            One stop for all your daily needs.{'\n'}Find best professionals nearby.
          </Text>
          <InputBasic
            label="Phone Number"
            placeholder="000-000-0000"
            keyboardType="phone-pad"
            maxLength={10}
            onChange={(value: any) => setPhone(value)}
            isLoading={!isLoading}
          />
        </View>
        <View>
          <Text variant="bodyLarge" style={styles.legalText}>
            By creating or signing into an account you are agreeing with our{' '}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://isnegi.github.io/')}
            >
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://isnegi.github.io/')}
            >
              Privacy Statement
            </Text>
            .
          </Text>
          <Button style={styles.button} mode="contained" onPress={signIn} loading={isLoading} disabled={isLoading}>
            Get OTP
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 25,
  },
  upperSection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  iText: {
    marginBottom: 40,
  },
  legalText: {
    marginBottom: 16,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  tinyLogo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 8,
    borderRadius: 5,
  },
});
