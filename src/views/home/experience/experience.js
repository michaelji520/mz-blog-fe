import React from 'react';
import './experience.less';

export default class Experience extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="experience">
        <h4 className="title">About me</h4>
        <ul className="list">
          <li className="item">
            <i className="icon-calendar"></i>
            Went to <a target="_blank" href="https://baike.baidu.com/item/华山">Mount Hua</a>
          </li>
          <li className="item">
            <i className="icon-github"></i>
            Working at <a target="_blank" href="https://baike.baidu.com/item/作业帮">Zuo Ye Bang</a>
          </li>
          <li className="item">
            <i className="icon-home"></i>
            Lives in <a target="_blank" href="https://map.baidu.com/search/北京市">Bei Jing, China</a>
          </li>
          <li className="item">
            <i className="icon-location"></i>
            From <a target="_blank" href="https://map.baidu.com/search/河北省">He Bei, China</a>
          </li>
        </ul>
      </div>
    );
  }
}