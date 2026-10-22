import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Login';
import Register from './src/components/Register';
import ForgotPassword from './src/components/ForgotPassword';
import Home from './src/components/Home';
import Categories from './src/components/Categories';
import Product from './src/components/Product';
import Cart from './src/components/Cart';
import Profile from './src/components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Categories"
          component={Categories}
        />

        <Stack.Screen
          name="Product"
          component={Product}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
