import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/telas/HomeScreen';
import { LoginScreen } from './src/telas/LoginScreen';
import { ScanerScreen } from './src/telas/ScanerScreen';
import { DashScreen } from './src/telas/DashScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />

          <Stack.Screen
            name="DashScreen"
            component={DashScreen}
          />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />

          <Stack.Screen
            name="ScanerScreen"
            component={ScanerScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
