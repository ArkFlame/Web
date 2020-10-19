import React, {Component} from 'react';
import '../components/ItemList.css'
import PropTypes from "prop-types";
import Item from "./Item";
import './ItemList.css'

export default class ItemList extends Component {

    render(){
        const { title, children, vertical } = this.props
        return(
            <div>
                <span class="storeTitle">{title}</span>
                <div className="space" />
                <ul className={vertical ? "items vertical" : "items horizontal"}>
                    {children}
                </ul>
            </div>
        )
    }

};
