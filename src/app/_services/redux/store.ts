import {configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from './reducer';


const persistedReducer = persistReducer(
  {key: 'primary', version: 2, storage},
  rootReducer,
);

export const store = configureStore(
  {
    devTools: process.env.NODE_ENV !== 'production',
    reducer:  persistedReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
                                    serializableCheck: {
                                      ignoredActions: [
                                        FLUSH, REHYDRATE, PAUSE,
                                        PERSIST,
                                        PURGE, REGISTER,
                                      ],
                                    },
                                  });
    },
  },
);

export const persistor = persistStore(store)