import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { CartContext } from '../navigation/CartContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/CheckoutScreen';

const CheckoutScreen = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigation = useNavigation() as any; // Type assertion to avoid TypeScript error
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Checkout successful', '', [
      { text: 'OK', onPress: () => { clearCart(); navigation.navigate('Home' as never); } }
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.name} - ${item.price * item.quantity} ({item.quantity})</Text>
        )}
      />
      <Text>Total: ${total}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

export default CheckoutScreen;
