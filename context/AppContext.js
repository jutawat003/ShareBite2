
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [bookings, setBookings] = useState([]);

  function toggleFavorite(id) {
    setFavorites((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );
  }

  function bookFood(id) {
    setBookings((old) =>
      old.includes(id) ? old : [...old, id]
    );
  }

  function cancelBooking(id) {
    setBookings((old) => old.filter((item) => item !== id));
  }

  return (
    <AppContext.Provider
      value={{
        favorites,
        bookings,
        toggleFavorite,
        bookFood,
        cancelBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
