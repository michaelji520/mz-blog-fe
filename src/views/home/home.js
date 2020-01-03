import React from 'react';
import Profile from './profile/profile';
import './home.less';

export default class Home extends React.Component {
  render () {
    return (
      <div className="homepage">
        <Profile></Profile>
      </div>
    );
  }
}