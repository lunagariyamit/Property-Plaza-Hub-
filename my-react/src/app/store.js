import { configureStore } from '@reduxjs/toolkit';
import PropertyType from '../components/PropertyTypes';

export const store = configureStore({
  reducer: {
    apartment: PropertyType,
  },
});
