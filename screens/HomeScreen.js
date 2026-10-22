
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
} from 'react-native';

import foods from '../data/foods';
import FoodCard from '../components/FoodCard';
import { useApp } from '../context/AppContext';

export default function HomeScreen({ navigation }) {
  const {
    favorites,
    bookings,
    toggleFavorite,
    bookFood,
  } = useApp();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* ส่วนต้อนรับ */}
      <View style={styles.welcomeRow}>
        <View style={styles.welcomeText}>
          <Text style={styles.greeting}>ยินดีต้อนรับ 👋</Text>
          <Text style={styles.brand}>ShareBite 🌱</Text>
          <Text style={styles.subtitle}>
            แบ่งปันอาหาร ลดขยะ สร้างสังคมที่ดี
          </Text>
        </View>
        <View style={styles.logoCircle}>
          <Text style={styles.logo}>🌿</Text>
        </View>
      </View>

      {/* แบนเนอร์หลัก */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=900&auto=format&fit=crop&q=85',
        }}
        style={styles.banner}
        imageStyle={styles.bannerImage}
      >
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTag}>SHARE GOODNESS</Text>
          <Text style={styles.bannerTitle}>
            อาหารดี ๆ{'\n'}ไม่ควรถูกทิ้ง
          </Text>
          <Text style={styles.bannerDescription}>
            ส่งต่ออาหารให้เกิดประโยชน์สูงสุด
          </Text>
          <View style={styles.bannerPill}>
            <Text style={styles.bannerPillText}>
              🌱 แบ่งปัน • ลดขยะ
            </Text>
          </View>
        </View>
      </ImageBackground>

      {/* สรุปข้อมูล */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>🍱</Text>
          <Text style={styles.statNumber}>{foods.length}</Text>
          <Text style={styles.statLabel}>รายการอาหาร</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>❤️</Text>
          <Text style={styles.statNumber}>{favorites.length}</Text>
          <Text style={styles.statLabel}>รายการโปรด</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>📦</Text>
          <Text style={styles.statNumber}>{bookings.length}</Text>
          <Text style={styles.statLabel}>รายการจอง</Text>
        </View>
      </View>

      {/* หัวข้ออาหาร */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>อาหารใกล้คุณ</Text>
          <Text style={styles.sectionSubtitle}>
            เลือกสิ่งที่คุณชอบ แล้วส่งต่อความสุข
          </Text>
        </View>

        <Pressable
          style={styles.seeAllButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.seeAllText}>ดูทั้งหมด ›</Text>
        </Pressable>
      </View>

      {/* รายการอาหาร */}
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          favorite={favorites.includes(food.id)}
          booked={bookings.includes(food.id)}
          onFavorite={() => toggleFavorite(food.id)}
          onBook={() => bookFood(food.id)}
        />
      ))}

      {/* ข้อความท้ายหน้า */}
      <View style={styles.footer}>
        <Text style={styles.footerEmoji}>🌍 💚</Text>
        <Text style={styles.footerTitle}>ทุกมื้อมีคุณค่า</Text>
        <Text style={styles.footerText}>
          เริ่มต้นแบ่งปันวันนี้ เพื่อโลกที่ดีขึ้นในวันพรุ่งนี้
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F6EF',
  },
  content: {
    padding: 17,
    paddingBottom: 105,
  },
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 19,
  },
  welcomeText: {
    flex: 1,
  },
  greeting: {
    fontSize: 13,
    color: '#758174',
    marginBottom: 4,
  },
  brand: {
    fontSize: 27,
    fontWeight: '900',
    color: '#19452F',
  },
  subtitle: {
    fontSize: 12,
    color: '#758174',
    marginTop: 5,
  },
  logoCircle: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#E5EDD9',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  logo: {
    fontSize: 28,
  },
  banner: {
    height: 205,
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 18,
    backgroundColor: '#234D35',
  },
  bannerImage: {
    borderRadius: 22,
  },
  bannerOverlay: {
    flex: 1,
    padding: 19,
    justifyContent: 'center',
    backgroundColor: 'rgba(15, 54, 34, 0.62)',
  },
  bannerTag: {
    color: '#DCE9BD',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 9,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 36,
    fontWeight: '900',
  },
  bannerDescription: {
    color: '#F0F3E9',
    fontSize: 12,
    marginTop: 7,
  },
  bannerPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCE9BD',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 12,
  },
  bannerPillText: {
    color: '#19452F',
    fontSize: 11,
    fontWeight: '800',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#E9EDE3',
  },
  statEmoji: {
    fontSize: 19,
  },
  statNumber: {
    fontSize: 21,
    fontWeight: '900',
    color: '#19452F',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 10,
    color: '#788277',
    marginTop: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '900',
    color: '#19452F',
  },
  sectionSubtitle: {
    fontSize: 11,
    color: '#7B857A',
    marginTop: 4,
  },
  seeAllButton: {
    backgroundColor: '#E8EFDF',
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 9,
  },
  seeAllText: {
    color: '#24583B',
    fontSize: 12,
    fontWeight: '800',
  },
  footer: {
    backgroundColor: '#E8EFDF',
    padding: 21,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  footerEmoji: {
    fontSize: 24,
    marginBottom: 7,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#19452F',
  },
  footerText: {
    fontSize: 12,
    color: '#667669',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 19,
  },
});
