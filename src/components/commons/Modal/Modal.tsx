import React from 'react';
import styled from 'styled-components';
import { Modal as AntdModal } from 'antd';

import { Box, LoadingSpinner } from '..';
import { StoresItem } from '@/types/stores';

interface Props {
  title?: string;
  open?: boolean;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  contents?: StoresItem;
  isLoading?: boolean;
}
const Modal: React.FC<Props> = ({
  title,
  open,
  onCancel,
  onOk,
  contents,
  isLoading,
}) => {
  const { name, description, url, image } = contents || {};

  console.log(description);

  return (
    <AntdModal
      title={title}
      okText='확인'
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      width='800px'
    >
      {isLoading && !contents ? (
        <Box justifyContent='center' padding='80px 0'>
          <LoadingSpinner size={50} />
        </Box>
      ) : (
        <Box flexDirection='row'>
          <Box flex='1' marginRight='10px'>
            <img src={image} alt={`${name} image`} />
          </Box>
          <Box flex='1' justifyContent='space-between'>
            <Box>
              <Title>{name}</Title>
              <Description>{description}</Description>
            </Box>
            {url && (
              <a href={url} target='_blank' rel='noreferrer'>
                홈페이지 바로가기
              </a>
            )}
          </Box>
        </Box>
      )}
    </AntdModal>
  );
};

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 10px;
`;
const Description = styled.p`
  padding-top: 15px;
  line-height: 1.3;
  white-space: pre-wrap;
`;

export default Modal;
