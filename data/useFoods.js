
import { useState, useEffect, useCallback } from 'react';

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

      const response = await fetch(FOODS_URL);

      if (!response.ok) {
        throw new Error('ไม่สามารถโหลดข้อมูลอาหารจาก GitHub ได้');
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('รูปแบบ foods.json ต้องเป็นรายการอาหารแบบ Array');
      }

      setFoods(data);
    } catch (err) {
      setError(err.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูล');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reloadFoods();
  }, [reloadFoods]);

  return { foods, loading, error, reloadFoods };
}
