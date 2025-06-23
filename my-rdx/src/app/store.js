import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: couterReducer,
  },
});
