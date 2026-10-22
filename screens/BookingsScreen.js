
import React from 'react';
import { ScrollView, Text, View, Pressable, StyleSheet } from 'react-native';
import foods from '../data/foods';
import { useApp } from '../context/AppContext';

export default function BookingsScreen() {
  const { bookings, cancelBooking } = useApp();
  const bookedFoods = foods.filter((food) => bookings.includes(food.id));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>รายการจอง 📋</Text>

      {bookedFoods.length > 0 ? bookedFoods.map((food) => (
        <View key={food.id} style={styles.card}>
          <Text style={styles.emoji}>{food.emoji}</Text>
          <View style={styles.info}>
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.price}>ราคา ฿{food.price}</Text>
            <Pressable
              style={styles.cancel}
              onPress={() => cancelBooking(food.id)}
            >
              <Text style={styles.cancelText}>ยกเลิกการจอง</Text>
            </Pressable>
          </View>
        </View>
      )) : (
        <Text style={styles.empty}>คุณยังไม่มีรายการจอง</Text>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  emoji: {
    fontSize: 38,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#24452D',
  },
  price: {
    marginTop: 5,
    color: '#31834A',
  },
  cancel: {
    alignSelf: 'flex-start',
    backgroundColor: '#FBE9E7',
    padding: 9,
    borderRadius: 8,
    marginTop: 10,
  },
  cancelText: {
    color: '#A63E35',
  },
  empty: {
    textAlign: 'center',
    color: '#657267',
    marginTop: 30,
  },
});
