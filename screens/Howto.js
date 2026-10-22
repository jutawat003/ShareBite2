
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function Howto() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>วิธีใช้งาน ShareBite</Text>

      <Text style={styles.step}>1. 🏠 หน้าแรก</Text>
      <Text style={styles.detail}>
        ดูรายการอาหารที่พร้อมแบ่งปันหรือจำหน่าย
      </Text>

      <Text style={styles.step}>2. 🔎 ค้นหาอาหาร</Text>
      <Text style={styles.detail}>
        พิมพ์ชื่ออาหารหรือสถานที่เพื่อค้นหารายการ
      </Text>

      <Text style={styles.step}>3. ❤️ รายการโปรด</Text>
      <Text style={styles.detail}>
        กดปุ่มรายการโปรดเพื่อบันทึกอาหารที่สนใจ
      </Text>

      <Text style={styles.step}>4. 📋 รายการจอง</Text>
      <Text style={styles.detail}>
        กดจองอาหาร แล้วตรวจสอบรายการที่จองได้ในหน้านี้
      </Text>

      <Text style={styles.note}>
        หมายเหตุ: รายการอาหารในเวอร์ชันตัวอย่างนี้เป็นข้อมูลจำลอง
        การจองยังไม่ได้เชื่อมต่อกับร้านค้าจริง
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F1',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#24452D',
    marginBottom: 22,
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F7D46',
    marginTop: 14,
  },
  detail: {
    fontSize: 15,
    color: '#526354',
    marginTop: 6,
    lineHeight: 23,
  },
  note: {
    marginTop: 25,
    color: '#657267',
    lineHeight: 22,
  },
});
