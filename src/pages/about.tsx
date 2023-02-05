import dynamic from 'next/dynamic';

import { HeadPageMeta } from '@/components/commons';

const AboutPage = dynamic(() => import('@/components/pages/About'));

const Home = () => {
  return (
    <>
      <HeadPageMeta
        title='About This Project'
        description='Description of this project '
        noFollow
      />

      <AboutPage />
    </>
  );
};

export default Home;
