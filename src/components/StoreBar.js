import React, {Component} from "react"
import "./StoreBar.css"
import {Link} from "react-router-dom";

export default class StoreBar extends Component {

    render() {
        const { categories } = this.props
        return (
            <div className={"storeBar"}>
                <ul className={"menuList"}>
                    {
                        categories.map((category, key) => (
                            <li key={key}><Link to={"/tienda/" + category}>{category}</Link></li>
                        ))
                    }
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