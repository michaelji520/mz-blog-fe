import React from 'react';
import Profile from './profile/profile';
import './home.less';

export default class Home extends React.Component {
  render () {
    return (
      <div className="homepage">
        <div className="myself">
          <Profile></Profile>
        </div>
        <div className="recommendations"></div>
      </div>
    );
  }
}