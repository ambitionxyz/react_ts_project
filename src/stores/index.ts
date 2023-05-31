import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

export type RootDispatch = typeof store.dispatch;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
