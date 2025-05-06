import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Context providers
import { AuthProvider } from './src/context/AuthContext';
import { GroupProvider } from './src/context/GroupContext';

// Screens
import AuthScreen from './src/screens/AuthScreen';
import GroupListScreen from './src/screens/GroupListScreen';
import GroupCreateScreen from './src/screens/GroupCreateScreen';
import EntryListScreen from './src/screens/EntryListScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import JoinGroupScreen from './src/screens/JoinGroupScreen';

// Ignore specific warnings
LogBox.ignoreLogs([
  'ReactNativeBLE',
  'Bluetooth',
  '[react-native-gesture-handler]',
]);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for authenticated users
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#377E47',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { paddingBottom: 5, height: 60 }
      }}
    >
      <Tab.Screen 
        name="Merkinnät" 
        component={EntryListScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Ryhmät" 
        component={GroupListScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profiili" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main navigation structure
const App = () => {
  return (
    <AuthProvider>
      <GroupProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen name="CreateGroup" component={GroupCreateScreen} options={{ headerShown: true, title: 'Luo uusi ryhmä' }} />
            <Stack.Screen name="JoinGroup" component={JoinGroupScreen} options={{ headerShown: true, title: 'Liity ryhmään' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GroupProvider>
    </AuthProvider>
  );
};

export default App;