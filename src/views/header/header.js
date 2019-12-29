import React from 'react';
import logo from '../../assets/images/brand-white.png';
import './header.less';

/**
 * @description blog navigation bar 
 */
export default class BlogHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // navigation list
      list: [],
      logo: logo
    };
  }
  render () {
    return (
      <header className="blog-header">
        <img className="logo" src={logo} alt="logo"/>
        <ul>
          <li></li>
        </ul>
      </header>
    );
  }
} 