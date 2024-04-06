import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputBasic from '../components/InputBasic';
import { Smartphone } from 'lucide-react-native';
import PrimaryButton from '../components/PrimaryButton';
import FlatButton from '../components/FlatButton';
import COLORS from '../theme/colors';

export default function Verify({ navigation }): React.JSX.Element {
  const [otp, setOtp] = useState();

  const verifyOTP = () => {
    console.log('verifyOTP() called!' + otp);
    navigation.navigate('ToApp');
  };

  const resendOtp = () => {
    console.log('resendOtp() called!');
    // navigation.navigate('ToApp');
  };

  return (
    // <View style={styles.container}>
    <View style={styles.layout}>
      <View style={styles.box}>
        <View style={styles.contentContainer}>
          <View style={{ marginBottom: 30 }}>
            {/* <Smartphone color={'#fff'} size={64} /> */}
            <Text style={styles.header}>
              Verify OTP <Smartphone size={32} color={'#fff'} />
            </Text>
          </View>
          <View>
            <Text style={{ marginBottom: 18 }}>
              Enter the 6 digit code we sent to your number ('{'this'}') to verify.
            </Text>
            <InputBasic
              label="OTP"
              showLabel={false}
              placeholder="0-0-0-0-0-0"
              keyboardType="phone-pad"
              maxLength={6}
              onChange={(value: any) => setOtp(value)}
            />
            <Text>Didn't you receive OTP?</Text>
            <FlatButton
              title="Resend it"
              a16yLabel={'Resend it'}
              onPressHandler={resendOtp}
              showLoader={false}
            />
          </View>
        </View>
        <View>
          <PrimaryButton
            title="Get OTP"
            a16yLabel={'Get OTP'}
            onPressHandler={verifyOTP}
            showLoader={false}
          />
        </View>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 32,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
});
