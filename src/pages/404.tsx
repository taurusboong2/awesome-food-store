import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';

import { useNotFoundRedirect } from '@/hooks/common.hook';
import { Box } from '@/components/commons';

const NotFoundPage = () => {
  const { second } = useNotFoundRedirect(5);

  return (
    <>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Box center>
            <Box pb='30px'>{second}초 뒤 홈으로 이동합니다.</Box>
            <Link href={'/'}>
              <Button type='primary'>홈으로</Button>
            </Link>
          </Box>
        }
      />
    </>
  );
};

export default NotFoundPage;
