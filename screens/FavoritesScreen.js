
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import foods from '../data/foods';
import FoodCard from '../components/FoodCard';
import { useApp } from '../context/AppContext';

export default function FavoritesScreen() {
  const { favorites, bookings, toggleFavorite, bookFood } = useApp();
  const savedFoods = foods.filter((food) => favorites.includes(food.id));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>รายการโปรด ❤️</Text>

      {savedFoods.length > 0 ? savedFoods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          favorite={true}
          booked={bookings.includes(food.id)}
          onFavorite={() => toggleFavorite(food.id)}
          onBook={() => bookFood(food.id)}
        />
      )) : (
        <Text style={styles.empty}>ยังไม่มีอาหารในรายการโปรด</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F1',
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#24452D',
    marginBottom: 18,
  },
  empty: {
    textAlign: 'center',
    marginTop: 30,
    color: '#657267',
  },
});
