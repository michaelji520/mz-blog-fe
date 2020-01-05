import React from 'react';
import './profile.less';
export default class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Michael Zhang',
      avatar: 'http://www.zhangji.xyz/static/images/my-avatar.jpg',
      cover: 'https://static.zhangji.xyz/FsROxEURRFb7g72hOD29cZa2EmTQ',
      description: 'I wish i was a little bit stronger, wish i was a skier, wish i had a girl… also.'
    };
  }
  
  render () {
    return (
      <div className="profile">
        <div className="cover" style={ {backgroundImage: `url(${this.state.cover})`} }></div>
        <div className="info">
          <img className="avatar" src={this.state.avatar} alt="avatar"/>
          <h2 className="nickname">{this.state.name}</h2>
          <p className="description">{this.state.description}</p>
        </div>
      </div>
    );
  }
}