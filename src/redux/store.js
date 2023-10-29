import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "./NewsSlice";

// Combine your reducers
const rootReducer = combineReducers({
    news: newsReducer,
});

// Configure Redux Persist
const persistConfig = {
    key: "root",
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
