import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface TabItemProps {
  icon: string;
  label: string;
}

const TabItem: React.FC<TabItemProps> = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default TabItem;
