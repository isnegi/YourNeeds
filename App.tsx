import React, { useEffect, useState } from 'react';

import Splash from './src/screens/Splash';
import PrimaryNavigator from './src/navigation/Primary';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const getUserToken = async () => {
    // for testing only
    const sleep = (duration: any) => new Promise((resolve) => setTimeout(resolve, duration));

    try {
      await sleep(1500); // causes one and half second loading
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  // Incomplete code: this placeholder needs to be
  // replaced with an actual splash screen implementation.
  if (isLoading) {
    return <Splash />;
  }

  return (
    <PaperProvider>
      <PrimaryNavigator />
    </PaperProvider>
  );
}

export default App;
