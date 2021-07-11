import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store/globalStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
