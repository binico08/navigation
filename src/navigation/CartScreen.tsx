import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { CartContext } from '../navigation/CartContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/CartScreen';

const CartScreen: React.FC = () => {
  const { cart, updateQuantity } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name} - ${item.price * item.quantity} ({item.quantity})</Text>
            <Button title="-" onPress={() => updateQuantity(item.id, -1)} />
            <Button title="+" onPress={() => updateQuantity(item.id, 1)} />
          </View>
        )}
      />
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout' as never)} />
    </View>
  );
};

export default CartScreen;
