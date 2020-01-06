import React from 'react';
import { Link } from 'react-router-dom';
import './article-card.less';

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
              <p className="article-meta">{`${article.createTime} by ${'Michael Zhang'} 阅读 ${article.viewTimes}次`}</p>
              <div className="article-brief">
                <div className="article-meta">
                  <p className="desc">{article.description}</p>
                  <p className="tags">
                    {article.tags.map((tag, idx) => {
                      return (<span key={idx}>{tag}</span>);
                    })}
                  </p>
                  <p><Link to={`/article/${article.id}`}>阅读全文</Link></p>
                </div>
                <img className="article-poster" src={article.poster} alt="poster"/>
              </div>
            </div>
          );
        })} 
      </div>
    );
  }
}