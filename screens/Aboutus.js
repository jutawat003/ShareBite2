
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Aboutus() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🌱</Text>
      <Text style={styles.title}>เกี่ยวกับ ShareBite</Text>
      <Text style={styles.text}>
        ShareBite เป็นแอปที่ช่วยแบ่งปันอาหารส่วนเกิน
        ให้ผู้คนเข้าถึงอาหารได้ง่ายขึ้น และช่วยลดขยะอาหาร
      </Text>
      <Text style={styles.text}>
        เป้าหมายของเราคือการสร้างสังคมแห่งการแบ่งปัน
        และใช้ทรัพยากรอาหารให้เกิดประโยชน์สูงสุด
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6F8F1',
    padding: 25,
  },
  emoji: {
    fontSize: 55,
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#24452D',
    marginVertical: 18,
  },
  text: {
    fontSize: 16,
    color: '#526354',
    lineHeight: 25,
    marginBottom: 14,
  },
});
