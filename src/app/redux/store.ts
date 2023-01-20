import {configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from './reducer';


const persistConfig    =
          {
              key:     'primary',
              version: 5,
              storage,
          }
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store     = configureStore({
                                            reducer:    persistedReducer,
                                            middleware: (getDefaultMiddleware) =>
                                                            getDefaultMiddleware({
                                                                                     serializableCheck: {
                                                                                         ignoredActions: [
                                                                                             FLUSH, REHYDRATE, PAUSE,
                                                                                             PERSIST,
                                                                                             PURGE, REGISTER,
                                                                                         ],
                                                                                     },
                                                                                 }),
                                        })

export const persistor = persistStore(store)