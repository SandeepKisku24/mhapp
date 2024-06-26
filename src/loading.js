
import React from 'react';
import './loading.css';
import load from "./gallery/loading.gif"

const Loading = () => {
  return (
    <div className="loading">
      <img src={load} alt="Loading..." />
    </div>
  );
};

export default Loading;
