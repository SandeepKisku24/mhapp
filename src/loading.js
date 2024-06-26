
import React from 'react';
import './loading.css';
import load from "./gallery/loading.gif"
import { useMediaQuery } from '@mantine/hooks';
import { mobile } from './screenSizes';
import { Image } from '@mantine/core';

const Loading = () => {
  const isMobile = useMediaQuery(mobile);
  return (
    <div className="loading">
      <Image w={isMobile?"50":"80"} h={isMobile?"50":"80"} src={load} alt="Loading..." />
    </div>
  );
};

export default Loading;
