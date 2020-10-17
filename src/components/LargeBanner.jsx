import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../components/LargeBanner.css'

export default class LargeBanner extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        children: PropTypes.object,
        show: PropTypes.bool.isRequired
    }

    render() {
      const { title, subtitle, children, show } = this.props
        return (
            <div className="main-title">
              <p><span className="title">{title}</span></p>
              
              <p><span className="subtitle">{subtitle}</span></p>
              {children}
            </div>
        )
    }
};
