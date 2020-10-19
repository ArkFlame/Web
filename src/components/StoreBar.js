import React, {Component} from "react"
import "./StoreBar.css"
import {Link} from "react-router-dom";

export default class StoreBar extends Component {



    render() {
        return (
            <div className={"storeBar"}>
                <ul className={"menuList"}>
                    <li><a href="#">Rangos</a></li>
                    <li><Link to={"/tienda/2"}>Llaves</Link></li>
                    <li><Link to={"/tienda/3"}>Apelaciones</Link></li>
                    <li><Link to={"/tienda/4"}>Información</Link></li>
                    <li>
                        <span className={"priceIndicator"}>
                            $0.00
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}