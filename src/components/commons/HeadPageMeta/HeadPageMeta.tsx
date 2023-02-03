import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  noFollow?: boolean;
}
const HeadPageMeta: React.FC<Props> = ({
  title,
  description,
  noFollow = false,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}
      {noFollow && <meta name='robots' content='noindex ,nofollow' />}
    </Head>
  );
};

export default HeadPageMeta;
