import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './common/base.less';
import 'antd/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import './common/CustomizeAntD.less';
import './assets/fonts/entypo/entypo.css';// import font
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
