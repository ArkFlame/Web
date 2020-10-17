import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../components/LargeDescriptionSection.css'
import Skeleton from '@yisheng90/react-loading'

export default class LargeDescriptionSection extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        children: PropTypes.object,
        show: PropTypes.bool.isRequired
    }

    render() {
      const { title, subtitle, children, show } = this.props
      if(show) {
        return (
            <div className="desc-title2">
              <p><span className="desc-title3">{title}</span></p>
              <p><span className="desc-subtitle2">{subtitle}</span></p>
              {children}
            </div>
        )
      } else {
        return (
            <div className="desc-title2">
              <p><Skeleton height={"4.5rem"} /><br /></p>
              <p><span className="desc-subtitle2">{subtitle}</span></p>
              {children}
            </div>
        )
      }
    }
};
