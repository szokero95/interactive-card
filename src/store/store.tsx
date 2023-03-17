import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cardReducer from "./rootReducer";

const store = configureStore({
  reducer: cardReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
