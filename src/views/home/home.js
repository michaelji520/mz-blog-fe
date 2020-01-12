import React from 'react';
import './home.less';
import ArticleCard from './article-card/article-card';

export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 123,
          title: '这个是示例标题', // 文章标题
          poster: 'https://static.zhangji.xyz/FsXIbP9YH809wcFKjcLvT1TYvKXN', // 文章海报
          viewTimes: 2, //浏览次数
          createTime: new Date().getTime(),
          description: '这里的内容是计划用来放文章的简单介绍的，但是我现在没有在网站上面放文章……这里的内容是计划用来放文章的简单介绍的，但是我现在没有在网站上面放文章……这里的内容是计划用来放文章的简单介绍的',
          tags: ['CSS相关', 'CSS前沿'],
          category: 'CSS相关'
        },
        {
          id: 456,
          title: '这个是示例标题', // 文章标题
          poster: 'https://static.zhangji.xyz/FsXIbP9YH809wcFKjcLvT1TYvKXN', // 文章海报
          viewTimes: 2, //浏览次数
          createTime: new Date().getTime(),
          description: '这里的内容是计划用来放文章的简单介绍的，但是我现在没有在网站上面放文章……这里的内容是计划用来放文章的简单介绍的，但是我现在没有在网站上面放文章……这里的内容是计划用来放文章的简单介绍的，但是我现在没有在网站上面放文章……这里的内容是计划用来放文章的简单介绍的，但是我现在没有在网站上面放文章……',
          tags: ['CSS相关', 'CSS前沿'],
          category: 'CSS相关'
        }
      ]
    };
  }
  render () {
    return (
      <div className="homepage">
        <div className="recommendations">
          <ArticleCard articles={this.state.articles}></ArticleCard>
        </div>
      </div>
    );
  }
}