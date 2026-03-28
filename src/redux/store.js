import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { filterReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);