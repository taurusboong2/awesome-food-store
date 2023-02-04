import dynamic from 'next/dynamic';

import { HeadPageMeta } from '@/components/commons';

const MainStores = dynamic(() => import('@/components/pages/Stores'));

const Home = () => {
  return (
    <>
      <HeadPageMeta
        title='taurusboong2-awesome food store'
        description='pupleIO coding test'
        noFollow
      />

      <MainStores />
    </>
  );
};

export default Home;
