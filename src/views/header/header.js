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
      list: [
        {
          label: 'Home',
          href: '/'
        },
        {
          label: 'Articles',
          href: '/articles'
        },
        {
          label: 'Write',
          href: '/write'
        },
        {
          label: 'demo',
          href: '/demo'
        }
      ],
      logo: logo
    };
  }

  render () {
    return (
      <header className="blog-header">
        <img className="logo" src={logo} alt="logo"/>
        <ul className="nav">
          {this.state.list.map((item, idx) => {
            return (
              <li key={idx} className="nav-i">
                {item.label}
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
} 