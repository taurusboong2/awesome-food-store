import { useEffect } from 'react';

import { fetchStoreDetail, fetchStores } from '@/apis/stores';

const Home = () => {
  useEffect(() => {
    (async () => {
      const stores = await fetchStores();
      console.log(`stores:`, stores);
    })();

    (async () => {
      const detailItem = await fetchStoreDetail(2);
      console.log(`detailItem:`, detailItem);
    })();
  }, []);

  return <>main</>;
};

export default Home;
