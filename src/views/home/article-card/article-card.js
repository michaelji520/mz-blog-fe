import React from 'react';
import { Link } from 'react-router-dom';
import './article-card.less';
import Util from '../../../common/util.js';

export default class ArticleCard extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        {this.props.articles.map((article) => {
          return (
            <div className="article" key={article.id}>
              <h2 title={article.title} className="article-title">
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </h2>
              <p className="article-meta">{`${Util.formatTimeStamp(article.createTime)} by ${'Michael Zhang'} 阅读 ${article.viewTimes}次`}</p>
              <div className="article-brief">
                <p className="desc">{article.description}</p>
                <p className="tags">
                  标签：
                  {article.tags.map((tag, idx) => {
                    return (<Link to={`/article/tag/${tag}`} key={idx}>{tag}</Link>);
                  })}
                </p>
                <p><Link to={`/article/${article.id}`}>阅读全文</Link></p>
                <img className="poster" src={article.poster} alt="poster"/>
              </div>
            </div>
          );
        })} 
      </div>
    );
  }
}