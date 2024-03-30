import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/telas/telaHome/HomeScreen';
import { LoginScreen } from './src/telas/telaLogin/LoginScreen';
import { ScanerScreen } from './src/telas/telaPresenca/ScanerScreen';
import { DashScreen } from './src/telas/telaDash/DashScreen';

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
