import React from 'react';
import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

import { Box } from '..';

interface Props {
  id?: number;
  image?: string;
  name?: string;
}
const Card: React.FC<Props> = ({ id, image, name }) => {
  return (
    <Box
      key={id}
      paddingBottom='20px'
      alignItems='center'
      justifyContent='center'
    >
      <AntdCard hoverable>
        <CardImage src={image} alt={`${name} image`} />
      </AntdCard>
    </Box>
  );
};

const CardImage = styled.img`
  width: 100%;
`;

export default Card;
