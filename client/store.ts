import { configureStore } from "@reduxjs/toolkit";
import { classificationsReducer } from "@/slices/analysisSlice";

const store = configureStore({
  reducer: {
    classifications: classificationsReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;