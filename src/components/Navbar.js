import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  sections: state.article.sections
});

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
      <h2>NewsToday</h2>
        {this.props.sections.map((section, index) => (
          <div key={index} className="navbar-item">
            <Link to={`/articles/${section.value}`}>{section.label}</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Navbar);
