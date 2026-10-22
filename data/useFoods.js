
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const FOODS_URL =
  'https://raw.githubusercontent.com/jutawat003/ShareBite2/main/data/foods.json';

export function useFoods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const reloadFoods = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      // เพิ่มพารามิเตอร์เพื่อป้องกันการใช้ข้อมูลเก่า
      const url = `${FOODS_URL}?t=${Date.now()}`;

      const response = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });

      if (!response.ok) {
        throw new Error(
          `โหลดข้อมูลจาก GitHub ไม่สำเร็จ (${response.status})`
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('รูปแบบข้อมูลอาหารไม่ถูกต้อง');
      }

      setFoods(data);
    } catch (err) {
      setError(err.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูล');
    } finally {
      setLoading(false);
    }
  }, []);

  // โหลดข้อมูลใหม่ทุกครั้งที่กลับมาหน้านี้
  useFocusEffect(
    useCallback(() => {
      reloadFoods();
    }, [reloadFoods])
  );

  return {
    foods,
    loading,
    error,
    reloadFoods,
  };
}
