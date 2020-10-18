import React, {Component} from 'react';

import "../routes/Home.css"
import LargeDescriptionSection from '../components/LargeDescriptionSection';
import LargeBanner from "../components/LargeBanner";
import ItemList from "../components/ItemList";
import Item from "../components/Item";

export default class Store extends Component {

    render() {
        return(
            <div>
                <LargeBanner title={"Tienda"} subtitle="" show={true}/>
                <br /><br />
                <ItemList vertical={false} title="Los más comprados">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemList>
                <div className="space" />
                <ItemList vertical={true} title="Asd">
                    <Item />
                    <Item />
                    <Item />
                </ItemList>
            </div>
        )
    }
}