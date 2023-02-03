import { api } from './index';
import { StoresItem } from '@/types/stores';

export const fetchStores = async () => {
  const response = await api.get<StoresItem[]>(`/stores`);
  return response;
};

export const fetchStoreDetail = async (id: number) => {
  const response = await api.get<StoresItem>(`/stores/${id}`);
  return response;
};
