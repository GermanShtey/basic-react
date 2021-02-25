import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.id} className={'test__article-list--item'}>
      <Article
        article={article}
      >
      </ Article>
    </li>
  ))
  return <ul>{articleElements}</ul>
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default connect(state => ({
  articles: state.articles,
}))(ArticleList);
