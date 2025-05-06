/**
 * @format
 * Porovasat - Digitaalinen vasanmerkintäsovellus
 */

import { AppRegistry, LogBox, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Prevent text scaling on iOS
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

// Ignore specific warnings that come from libraries
LogBox.ignoreLogs([
  'ReactNativeBLE',
  'Bluetooth',
  '[react-native-gesture-handler]',
  'Sending `onAnimatedValueUpdate`',
  'Non-serializable values were found in the navigation state',
  'Require cycle:',
]);

// Handle global errors
if (!__DEV__) {
  // Production error handling
  const errorHandler = (error, isFatal) => {
    // In a real app, you would log errors to a service like Sentry
    console.error(error);
  };
  
  ErrorUtils.setGlobalHandler(errorHandler);
}

// Register the app
AppRegistry.registerComponent(appName, () => App);