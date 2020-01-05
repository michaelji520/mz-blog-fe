import React from 'react';
import './home.less';
import { Link } from 'react-router-dom';

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
          description: '这里的内容是计划用来放文章的简单介绍的，但是我现在没有在网站上面放文章……',
          tags: ['CSS相关', 'CSS前沿']
        }
      ]
    };
  }
  render () {
    return (
      <div className="homepage">
        <div className="recommendations">
          {
            this.state.articles.map((article) => {
              return (
                <div className="article" key={article.id}>
                  <h2 title={article.title} className="article-title">
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </h2>
                  <div className="article-brief">
                    <div className="article-meta">
                      <p className="extra">{`${article.createTime} by ${'Michael Zhang'} 阅读 ${article.viewTimes}次`}</p>
                      <p className="desc">{article.description}</p>
                      <p className="tags">
                        {
                          article.tags.map((tag, idx) => {
                            return (<span key={idx}>{tag}</span>);
                          })
                        }
                      </p>
                      <p><Link to={`/article/${article.id}`}>阅读全文</Link></p>
                    </div>
                    <img className="article-poster" src={article.poster} alt="poster"/>
                  </div>
                </div>
              );
            })
          } 
        </div>
      </div>
    );
  }
}