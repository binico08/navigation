import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, Button } from 'react-native';
import { CartContext, CartItem } from '../navigation/CartContext'; // Import CartContext for managing cart state
import TabItem from '../components/TabItem'; // Import TabItem component
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
  const cartContext = useContext(CartContext); // Access cart context
  const { addToCart } = cartContext || { addToCart: (product: CartItem) => {} }; // Handle undefined context

  const renderItem = ({ item }: { item: { id: string; name: string; price: number; } }) => (
    <View>  
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart({ ...item, quantity: 1 })} />
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
      {/* Bottom Navigation */}
      <View style={styles.tabBar}>
        <TabItem
          icon="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-128.png"
          label="Startups"
        />
        <TabItem
          icon="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/44-web_essential-512.png"
          label="Startups"
        />
        <TabItem
          icon="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/01-web_essential-512.png"
          label="Startups"
        />
      </View>
    </View>

);
}

export default HomeScreen;
