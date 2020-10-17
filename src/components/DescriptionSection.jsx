import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../components/DescriptionSection.css'

export default class LargeDescriptionSection extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        children: PropTypes.object,
        icon: PropTypes.string,
        img_opposite_side: PropTypes.string
    }

    render() {
      const { title, subtitle, children, icon, img_opposite_side } = this.props
      if(img_opposite_side && icon) {
        return (
            <div className="desc-title">
              <p><img src={icon} className="icon" alt="Ícono" /></p>
              <p><span className="desc-title1">{title}</span></p>
              <p><span className="desc-subtitle">{subtitle}</span></p>
              <div className="img" style={{ backgroundImage:`url(${img_opposite_side})` }} align="right" />
              <p className="children-2">{children}</p>
            </div>
        )
      } else if(img_opposite_side && !icon) {
        return (
            <div className="desc-title">
              <p><span className="desc-title1">{title}</span></p>
              <p><span className="desc-subtitle">{subtitle}</span></p>
              <div className="img"><img src={img_opposite_side} alt="Imagen" /></div>
              <p className="children-2">{children}</p>
            </div>
        )
      } else if(!img_opposite_side && icon) {
        return (
            <div className="desc-title">
              <p><img src={icon} className="icon" alt="Ícono" /></p>
              <p><span className="desc-title1">{title}</span></p>
              <p><span className="desc-subtitle">{subtitle}</span></p>
              <p className="children-2">{children}</p>
            </div>
        )
      } else if(!img_opposite_side && !icon) {
        return (
            <div className="desc-title">
              <p><span className="desc-title1">{title}</span></p>
              <p><span className="desc-subtitle">{subtitle}</span></p>
              <p className="children-2">{children}</p>
            </div>
        )
      }
    }
};
