import { configureStore } from '@reduxjs/toolkit';
import swap from './swap/reducer'

const store = configureStore({
    reducer: {
        swap,
    },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;