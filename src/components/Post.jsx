import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import '../components/Post.css'
import Skeleton from '@yisheng90/react-loading'

export default class Post extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        pfp: PropTypes.string.isRequired,
        images: PropTypes.string,
    }

    render() {
      const { content, author, datetime, show, pfp, images } = this.props
      if(show) {
        const date = new Date(datetime).toLocaleString()
        return (
            <div className="post">
              <b><div className="escrito">
              <p><img className="pfp" src={pfp} alt="Foto de perfil"/></p>
                <p><span>Escrito el {date} por {author}.</span></p>
              </div></b>
              <div className="contenido">
                <ReactMarkdown source={content} />
                <img src={images} alt="Imagen adjunta"/>
              </div>
            </div>
        )
      } else {
        return (
            <div className="post">

              <b><div className="escrito">
                <p><Skeleton width={32} height={32} circle /></p>
                <p><Skeleton width={250} height={14}/></p>
              </div></b>
              <div className="contenido">
                <Skeleton height={30} /><br />
                <Skeleton height={30} /><br />
                <Skeleton height={30} /><br />
                <Skeleton height={30} /><br />
                <Skeleton height={30} /><br />
                <Skeleton height={500} /><br />
              </div>
            </div>
        )
      }
    }
};
