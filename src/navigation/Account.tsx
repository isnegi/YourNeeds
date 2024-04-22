import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/account/Index';
import Profile from '../screens/account/Profile';
import Bookings from '../screens/account/Bookings';
import Settings from '../screens/account/Settings';
import Addresses from '../screens/account/Addresses';
import Payments from '../screens/account/Payments';
import About from '../screens/account/About';
import Membership from '../screens/account/Membership';
import Ratings from '../screens/account/Ratings';

const Stack = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name="home" component={Index}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="profile" component={Profile}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="bookings" component={Bookings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="settings" component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="membership" component={Membership}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="addresses" component={Addresses}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="payments" component={Payments}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="about" component={About}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ratings" component={Ratings}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
