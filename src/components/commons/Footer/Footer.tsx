import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <p>
          Copyright 2023.
          <a
            href='https://github.com/taurusboong2'
            target='_blank'
            rel='noreferrer'
          >
            taurusboong2
          </a>
          . All rights reserved.
        </p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  color: #666;
  font-size: 1.2rem;
  border-top: 1px solid #333;
  margin-top: 100px;

  p {
    padding: 5px 30px;
    line-height: 50px;
  }

  a {
    padding-left: 5px;
    color: #888;
  }
`;

export default Footer;
