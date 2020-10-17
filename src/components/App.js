import React, { Component } from 'react';

import PropTypes from 'prop-types';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {

    const {children} = this.props;

    return (
      <div className="App">
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
        <div className="none">
        </div>
      </div>
    );
  }
}

export default App;
