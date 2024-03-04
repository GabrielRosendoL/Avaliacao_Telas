import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CriarConta from './CriarConta';
import Feed from './Feed';
import SplashScreen from './SplashScreen';
import TelaDeLogin from './TelaDeLogin';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="TelaDeLogin" component={TelaDeLogin} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="CriarConta" component={CriarConta} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;
