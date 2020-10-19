import React, {Component} from 'react';

import "./Item.css"
import {Button} from "react-bootstrap";

export default class Store extends Component {

    render() {
        const { title, subtitle, image } = this.props
        return(
            <div className="item">
                <img src={image} className={"itemImg"} /><br />
                <span className="subtitle">{title}</span><br />
                <span className="desc-subtitle2">{subtitle}</span>
                <Button style={{width: "100%", borderRadius: "10px", border: "none", background: "#be3d3d"}}>Ver más</Button>
            </div>
        )
    }
}