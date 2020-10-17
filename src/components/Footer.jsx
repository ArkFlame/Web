import React, {Component} from 'react';
import '../components/Footer.css'

export default class Footer extends Component {

    render(){
        return(
            <div className="footer">
               <div className="f-content">
                    <div className="space"></div>
                    <a href="https://twitter.com/ArkFlameNetwork" class="twitter-follow-button" data-size="large" data-show-count="false">Seguir a ArkFlame</a>
                    <div className="space"></div>
                    <p>&copy; 2020 ArkFlame Network | <a href="https://www.mscpn.com">Sitio creado por Gerardo Wacker</a></p>
               </div>
            </div>
        )
    }

};
