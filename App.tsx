/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import FlashMessage from 'react-native-flash-message'


import AppNavigation from '@navigation/'
import { AppProvider } from '@providers/providerContext'

const App = () => (
  <AppProvider>
    { /* @ts-ignore */ }
    <FlashMessage
      position="top"
      style={{
        borderRadius: 25,
        maxWidth: '70%',
        minWidth: '70%',
        alignSelf: 'center',
        alignItems: 'center',
      }}
      floating
    />
    <AppNavigation />
  </AppProvider>
);

export default App;
