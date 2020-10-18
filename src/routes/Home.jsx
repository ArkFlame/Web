import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import LargeBanner from '../components/LargeBanner'
import DescriptionSection from '../components/DescriptionSection'
import LargeDescriptionSection from '../components/LargeDescriptionSection'
import "../routes/Home.css"
import users from '../assets/users.png'
import chat from '../assets/chat.png'
import tierra from '../assets/tierra.png'
import uno from '../assets/1.webp'


let copyIP = () => {
    let iphidden = document.getElementById('ip')
    iphidden.setSelectionRange(0, 99999);
    iphidden.select()

    document.execCommand("copy");
}

export default class Home extends Component {

  componentDidMount = () => {
   fetch("https://mandarina-arkflamenetwork-north1.stcl.ga/arkflame_pl", {
              method: "GET",
              headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
              }
          }).then(res => {
              return res.json()
          }).then(json => {
            this.setState({
                serverinfo: json
            })
                setTimeout(()=>{
                  this.setState({
                      isLoaded: true
                  })
                }, 2000)
              })
  }

  constructor(props) {
        super(props);
        this.state = {
            serverinfo: 0,
            isLoaded: true
        }
  }

  render() {

      return(
        <div>
          <LargeBanner title={"ArkFlame"} subtitle={"Descubre y adáptate a una nueva comunidad para ti."} show={this.state.isLoaded}/>
          <br /><br />
          <DescriptionSection
            img_opposite_side="https://pbs.twimg.com/media/EPk6xcTWkAMDAqB?format=jpg&name=large"
            icon={users} title={["Comunidad sin", <br />, "límites."]} subtitle={["Puedes jugar cuando quieras, como quieras y donde quieras;",
            <br />,  "ArkFlame cuenta con un sistema de reglas flexibles para asi permitir", <br />,
            "todo tipo de personas disfrutar de nuestro servidor."]} show={this.state.isLoaded}
          />
          <DescriptionSection
            img_opposite_side={uno}
            icon={chat} title={["Resolución de", <br />, "problemas."]} subtitle={["ArkFlame mantiene la creencia de que los usuarios son",
            <br />,  "importantes, y por ende buscaremos siempre la mejor", <br />,
            "solución para que desees estar en nuestro servidor."]} show={this.state.isLoaded}
          >
          <Link to="/blog">
              <Button>¡Ve nuestras últimas actualizaciones!</Button>
          </Link>
          </DescriptionSection>
          <LargeDescriptionSection title={["Únete a ", this.state.serverinfo, " jugadores en linea."]} subtitle="" show={true}>
                <div className="space" />
                <div className="space" />
                <div className="space" />
                <div className="join-placeholder" style={{ backgroundImage:`url(${tierra})`, borderRadius:"20px", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, .2), 0 6px 8px 0 rgba(0, 0, 0, .19);"}}>
                    <input id="ip" className="join-ip" value="play.arkflame.com" />
                    <div className="mc-button" onClick={copyIP}>Copiar IP</div>
                </div>
          </LargeDescriptionSection>
        </div>
      )
  }

};
