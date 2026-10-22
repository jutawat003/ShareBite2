
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import foods from '../data/foods';
import FoodCard from '../components/FoodCard';
import SearchBar from '../components/SearchBar';
import { useApp } from '../context/AppContext';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const { favorites, bookings, toggleFavorite, bookFood } = useApp();

  const results = foods.filter((food) =>
    `${food.name} ${food.location}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ค้นหาอาหาร 🔎</Text>
      <SearchBar value={query} onChangeText={setQuery} />

      {results.length > 0 ? results.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          favorite={favorites.includes(food.id)}
          booked={bookings.includes(food.id)}
          onFavorite={() => toggleFavorite(food.id)}
          onBook={() => bookFood(food.id)}
        />
      )) : (
        <Text style={styles.empty}>ไม่พบรายการอาหารที่ค้นหา</Text>
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
    marginBottom: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#657267',
    marginTop: 30,
  },
});
