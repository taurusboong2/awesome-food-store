import React from 'react';
import styled from 'styled-components';

import { Box } from '@/components/commons';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Wrapper>
        <Box
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          height='100%'
          padding='0px 20px'
        >
          <h1>AWESOME FOOD STORE</h1>
          <Box flexDirection='row'>
            <Link href='/' passHref>
              <MenuItem>STORE</MenuItem>
            </Link>
            <Link href='/about' passHref>
              <MenuItem>ABOUT</MenuItem>
            </Link>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  margin-bottom: 50px;

  h1 {
    font-size: 1.65rem;
    font-weight: bold;
  }
`;
const MenuItem = styled.span`
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

export default Header;
