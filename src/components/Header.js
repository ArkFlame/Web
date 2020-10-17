import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import icon from '../assets/icono.webp';
import '../components/Header.css'

export default class Header extends Component {

    render(){
        return(
          <div className="header">
              <div className="logo">
                <Link to="/"><img src={icon} alt=""/></Link>
              </div>
              <div className="navbar">
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="https://discord.gg/f43hmer">Discord</a></li>
                        <li><a href="https://twitter.com/arkflamenetwork/">Twitter</a></li>
                    </ul>
                </nav>
              </div>
          </div>
        );
    }

};
