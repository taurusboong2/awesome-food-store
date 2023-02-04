import React from 'react';
import styled, { css } from 'styled-components';

import { Box } from '@/components/commons';

interface Props {
  title?: string;
  maxWidth?: string;
  children?: React.ReactNode;
}
const Section: React.FC<Props> = ({ title, maxWidth, children }) => {
  return (
    <Container maxWidth={maxWidth}>
      <Box
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        mb={title ? '28px' : '0px'}
      >
        {title && <Title>{title}</Title>}
      </Box>
      {children}
    </Container>
  );
};

const Container = styled.section<{ maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 28px;
  ${(p) =>
    p.maxWidth &&
    css`
      margin-left: auto;
      margin-right: auto;
      max-width: ${p.maxWidth};
    `}
`;
const Title = styled.h2`
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export default Section;
