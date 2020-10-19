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
                        JSON.parse(categories).map((key, category) => (
                            <li><Link to={"/tienda/" + category.id}>{category.name}</Link></li>
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