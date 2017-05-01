import React, {Component} from 'react';
import {connect} from 'react-redux';
//import TeaserList from './TeaserList';

const mapStateToProps = state => ({
  allArticles: state.article.allArticles
});

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="welcome-header">Welcome to NewsToday!</h1>

      </div>
    )
  }
}


export default connect(mapStateToProps)(Homepage);
