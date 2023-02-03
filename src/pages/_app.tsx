import type { AppProps } from 'next/app';

import GlobalStyles from '@/styles/globalStyles';
import { Layout } from '@/components/commons';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
