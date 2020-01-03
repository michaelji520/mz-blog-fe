import React from 'react';
import './profile.less';
export default class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Michael Zhang',
      avatar: 'http://www.zhangji.xyz/static/images/my-avatar.jpg',
      cover: 'https://static.zhangji.xyz/FsROxEURRFb7g72hOD29cZa2EmTQ',
      description: 'I wish i was a little bit stronger, wish i was a skater, wish i had a girl… also.'
    };
  }
  
  render () {
    return (
      <div className="profile">
        <div className="cover" style={ {background: this.state.cover} }></div>
        {this.state.name}
      </div>
    );
  }
}