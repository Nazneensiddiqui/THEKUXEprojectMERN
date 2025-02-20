import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import myReducer from "../redux/CartSlice"

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, myReducer)

const Store=configureStore({
    reducer:{
        //your reducer
        myCart:persistedReducer 
    }
})
export default Store;
export const persistor = persistStore(Store);
