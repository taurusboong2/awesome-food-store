import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface IProps {
  size: number;
}
const LoadingSpinner: React.FC<IProps> = ({ size }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

  return <Spin indicator={antIcon} size='default' />;
};

export default LoadingSpinner;
