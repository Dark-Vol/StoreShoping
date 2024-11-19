import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    // Reducer -> Connect the function
    reducer: {
        
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;