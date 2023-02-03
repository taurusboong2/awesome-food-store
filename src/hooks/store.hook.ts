import { useEffect, useState } from 'react';

import { fetchStores, fetchStoreDetail } from '@/apis/stores';
import { StoresItem } from '@/types/stores';

export const useFetchStores = () => {
  const [items, setItems] = useState<StoresItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      (async () => {
        try {
          setIsLoading(true);
          setIsError(false);

          const { data } = await fetchStores();

          setItems(data);

          setIsLoading(false);
        } catch (e) {
          console.error(e);

          setIsLoading(false);
          setIsError(true);
        }
      })();
    }
  }, []);

  return {
    items,
    isLoading,
    isError,
  };
};

export const useFetchStoreDetail = (id: number) => {
  const [items, setItems] = useState<StoresItem>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      (async () => {
        try {
          setIsLoading(true);
          setIsError(false);

          const { data } = await fetchStoreDetail(id);

          setItems(data);

          setIsLoading(false);
        } catch (e) {
          console.error(e);

          setIsLoading(false);
          setIsError(true);
        }
      })();
    }
  }, []);

  return {
    items,
    isLoading,
    isError,
  };
};
