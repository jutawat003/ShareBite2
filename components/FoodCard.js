
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function FoodCard({
  food,
  favorite,
  booked,
  onFavorite,
  onBook,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image
          source={{ uri: food.image }}
          style={styles.foodImage}
          resizeMode="cover"
        />

        <View style={styles.info}>
          <Text style={styles.name}>{food.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {food.description}
          </Text>

          <Text style={styles.location}>
            📍 {food.location}
          </Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>฿{food.price}</Text>
            <View style={styles.quantityBadge}>
              <Text style={styles.quantityText}>
                เหลือ {food.quantity} ชิ้น
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          onPress={onFavorite}
          style={styles.heartButton}
          accessibilityLabel="เพิ่มหรือลบรายการโปรด"
        >
          <Text style={[styles.heart, favorite && styles.heartActive]}>
            {favorite ? '♥' : '♡'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.favoriteButton}
          onPress={onFavorite}
        >
          <Text style={styles.favoriteText}>
            {favorite ? '♥ บันทึกแล้ว' : '♡ รายการโปรด'}
          </Text>
        </Pressable>

        <Pressable
          style={[styles.bookButton, booked && styles.bookedButton]}
          onPress={onBook}
          disabled={booked}
        >
          <Text style={styles.bookText}>
            {booked ? '✓ จองแล้ว' : '▣ จองอาหาร'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 13,
    marginBottom: 17,
    borderWidth: 1,
    borderColor: '#EAEDE3',
    elevation: 3,
    shadowColor: '#183D2B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  foodImage: {
    width: 112,
    height: 142,
    borderRadius: 16,
    backgroundColor: '#E8EBDD',
  },
  info: {
    flex: 1,
    paddingLeft: 12,
    paddingTop: 4,
  },
  name: {
    fontSize: 17,
    fontWeight: '800',
    color: '#19452F',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    color: '#69756B',
  },
  location: {
    fontSize: 12,
    color: '#68766A',
    marginTop: 9,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: '900',
    color: '#17633D',
  },
  quantityBadge: {
    backgroundColor: '#EAF2DF',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
  },
  quantityText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#356344',
  },
  heartButton: {
    paddingLeft: 7,
    paddingTop: 2,
  },
  heart: {
    fontSize: 25,
    color: '#23543B',
  },
  heartActive: {
    color: '#E65050',
  },
  actions: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 14,
  },
  favoriteButton: {
    flex: 1,
    backgroundColor: '#F0F3E9',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteText: {
    color: '#315641',
    fontWeight: '700',
    fontSize: 12,
  },
  bookButton: {
    flex: 1.15,
    backgroundColor: '#216B45',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookedButton: {
    backgroundColor: '#829586',
  },
  bookText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12,
  },
});
