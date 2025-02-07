import { configureStore } from '@reduxjs/toolkit'
import  shoppersReducer  from './shoppersSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, WebStorage } from 'redux-persist'

import store from '@/redux/store'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'



export function createPersistStroge():WebStorage {
  const isSever = typeof window === "undefined";
// we will create dummy server

if(isSever){
  return{
    getItem(){
      return Promise.resolve(null);
    },
    setItem(){
      return Promise.resolve();
    },
    removeItem(){
      return Promise.resolve();
    },
  };
}

return createWebStorage("local")

}
const storage = 
 typeof window !== "undefined"?createWebStorage("local"):createPersistStroge();

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, shoppersReducer)

export default configureStore({
  reducer: {
    shoppers:persistedReducer,
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      }
    })
});

export const persistor = persistStore(store);