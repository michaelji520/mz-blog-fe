import React from 'react';
import './write.less';
import Marked from 'marked';
import '../../common/github-markdown.css';
import Service from '../../common/service.js';
import api from '../../api/api'
import { message } from 'antd';

export default class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 0,
      raw: ''
    };
  }
  async handlePageKeyDown (e) {
    // ctrl + s: save article and stop default action
    if (e.keyCode === 83 && e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
      let params = {
        title: this.title.value,
        content: this.content.value
      };
      if (this.state.id) { 
        params.id = this.state.id;
      }
      const res = await Service.post(api.saveArticle, params);
      if (res.code === 0) {
        this.setState({
          id: res.data.id
        }); 
        message.success('Article Saved');
      } else {
        message.error('Failed to save article');
      }
    }
  }
  handleEditorKeyUp (e) {
    let raw = e.target.value;
    this.setState({
      raw: raw
    });
  }
  render () {
    return (
      <div className="post" onKeyDown={this.handlePageKeyDown.bind(this)}>
        <input className="title" ref={(val) => this.title = val} placeholder="输入文章名称"/>
        <textarea ref={(val) => this.content = val} onKeyUp={this.handleEditorKeyUp.bind(this)} className="raw"></textarea>
        <div className="marked markdown-body" dangerouslySetInnerHTML={{__html: Marked(this.state.raw)}}></div>
      </div>
    );
  }
}