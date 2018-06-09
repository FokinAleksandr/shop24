import React from 'react';
import { HeaderPhones, StarBlog, YouTube, YouTubeOnline } from './';
import './index.css';

const UpperHeader = () => {
  return (
    <div className="header-1">
      <div className="header-1-links">
        <div className="header-1-links__left">
          <HeaderPhones />
        </div>
        <div className="header-1-links__right">
          <StarBlog />
          <YouTube />
          <YouTubeOnline />
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
