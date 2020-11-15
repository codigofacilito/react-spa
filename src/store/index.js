import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user';
import videosReducer from './videos';
import likeReducer from './likes';

const reducer = combineReducers({
  user: userReducer,
  videos: videosReducer,
  like: likeReducer
});

const persistConfg = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfg, reducer);


export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);