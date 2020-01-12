import React from 'react';
import './write.less';
import Marked from 'marked';
import '../../common/github-markdown.css';
import Service from '../../common/service.js';
import api from '../../api/api'

export default class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      markedText: ''
    };
  }
  handlePageKeyDown (e) {
    // ctrl + s: save article and stop default action
    if (e.keyCode === 83 && e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
      Service.post(api.saveArticle, {
      });
    }
  }
  handleEditorKeyUp (e) {
    let raw = e.target.value;
    this.setState({
      markedText: Marked(raw)
    });
  }
  render () {
    return (
      <div className="post" onKeyDown={this.handlePageKeyDown.bind(this)}>
        <input className="title" placeholder="输入文章名称"/>
        <textarea onKeyUp={this.handleEditorKeyUp.bind(this)} className="raw"></textarea>
        <div className="marked markdown-body" dangerouslySetInnerHTML={{__html: this.state.markedText}}></div>
      </div>
    );
  }
}