import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, Button } from 'react-native';
import { CartContext } from '../navigation/CartContext'; // Import CartContext for managing cart state
import styles from '../styles/HomeScreen';

const products = [
  { id: '1', name: 'General Admission Ticket', price: 1000 },
  { id: '2', name: 'Upper Box Ticket', price: 1600 },
  { id: '3', name: 'Lower Box Ticket', price: 2000 }, 
  { id: '4', name: 'VIP Ticket', price: 4500 },
  { id: '5', name: 'SVIP Ticket', price: 6500 },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext); // Access cart context

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart' as never)} />
    </View>
  );
};

export default HomeScreen;
