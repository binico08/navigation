import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useConstants } from './src/constants'; // Importing useConstants
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './src/navigation/CartContext';
import HomeScreen from './src/navigation/HomeScreen';
import CartScreen from './src/navigation/CartScreen';
import CheckoutScreen from './src/navigation/CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  const constants = useConstants(); // Using constants in the app
  return (
    <CartProvider>
      <NavigationContainer>
        <Text>{constants.appName}</Text> {/* Displaying the application name */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
