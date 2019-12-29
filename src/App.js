import React from 'react';
import './App.less';
import './common/CustomizeAntD.less';

import { Button } from 'antd';
import BlogHeader from './views/header/header';

function App() {
  return (
    <div className="blog">
      <BlogHeader></BlogHeader>
    </div>
  );
}

export default App;
