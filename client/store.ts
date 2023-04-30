import { configureStore } from "@reduxjs/toolkit";
import { resumeAnalysisReducer } from "./slices/analysisSlice";

const store = configureStore({
  reducer: {
    analysis: resumeAnalysisReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;