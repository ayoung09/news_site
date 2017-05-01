import React from 'react';
import {Link} from 'react-router-dom';

const TeaserList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>

        </div>
      ))}
    </div>
  )
};

export default TeaserList;
