import { useFetchStores, useFetchStoreDetail } from '../hooks/store.hook';

const Home = () => {
  const {
    items: StoreItems,
    isLoading: storesLoading,
    isError: storesError,
  } = useFetchStores();

  const {
    items: StoreDetailItems,
    isLoading: storeDetailLoading,
    isError: storeDetailError,
  } = useFetchStoreDetail(1);

  console.log(StoreItems);
  console.log('===========');
  console.log(StoreDetailItems);

  return <>main</>;
};

export default Home;
