import React, {Component} from 'react';

import "../routes/Home.css"
import "../routes/Join.css"
import tierra from '../assets/tierra.png'
import LargeDescriptionSection from '../components/LargeDescriptionSection';

let copyIP = () => {
    let iphidden = document.getElementById('ip')
    iphidden.setSelectionRange(0, 99999);
    iphidden.select()

    document.execCommand("copy");
}

export default class Join extends Component {
    render() {
        return(
          <div>
            <LargeDescriptionSection
              title={["¿Cómo me uno?"]} subtitle={["1. En Minecraft, ve a Multijugador y Agregar Server",
              <br />,  "2. Ingresa ", <span style={{color: "#0066ff"}}>play.arkflame.com</span>, " en la caja de IP, y dale a Listo"]} show={true}
            >
                <div className="join-placeholder" style={{ backgroundImage:`url(${tierra})` }}>
                    
                    <input id="ip" className="join-ip" value="PLAY.ARKFLAME.COM" />
                    <div className="mc-button" onClick={copyIP}>Copiar IP</div>
                </div>
            </LargeDescriptionSection>
          </div>
        )
    }
}