import React from 'react';
import logo from '../../assets/images/logo_img_sc.png';
import './header.less';
import { NavLink } from 'react-router-dom';

/**
 * @description blog navigation bar 
 */
export default class BlogHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      logo: logo
    };
  }
  handleSearchKeywordChange (e) {
    console.log(e.target.value);
  }
  handleSearchKeyDown (e) {
    let key = e.key;
    switch (key) {
      case 'Enter':
        // TODO trigger query keyword, jump to specific page for search result
        console.log('Should trigger search here');
        break;
      default:
        break;
    }
  }

  render () {
    return (
      <header className="blog-header">
        <img className="logo" src={logo} alt="logo"/>
        <ul className="nav">
          {this.props.navs.map((item, idx) => {
            return (
              <li key={idx} className="nav-i">
                <NavLink exact to={item.path}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="search">
          <input type="text" onKeyDown={this.handleSearchKeyDown} onChange={this.handleSearchKeywordChange.bind(this)} placeholder="Search articles"/>
        </div>
      </header>
    );
  }
} 