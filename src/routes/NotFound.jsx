import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';
import DescriptionSection from '../components/DescriptionSection'
import "../routes/Home.css"
import { Link } from 'react-router-dom'

export default class NotFound extends Component {

  constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false
        }
  }

  render() {

      return(
        <div>
          <DescriptionSection title={"404"} subtitle={["Página no encontrada",
            <br />,  "¿Estás seguro que el sitio al que intentas acceder existe?"]}
            show={this.state.isLoaded}
          >
            <Link to="/">
                <Button>Volver al inicio</Button>
            </Link>
          </DescriptionSection>
        </div>
      )
  }

};
