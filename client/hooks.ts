import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { ApplicationDispatch, ApplicationState } from "./store";


export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch: () => ApplicationDispatch = useDispatch;

export const useClassifications = () => {
  const { result, isLoading, error } = useAppSelector(
    (state) => state.analysis
  );

  return { result, isLoading, error };
};