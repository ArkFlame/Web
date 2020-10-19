import React, {Component} from 'react';

import "../routes/Home.css"
import LargeBanner from "../components/LargeBanner";
import ItemList from "../components/ItemList";
import Item from "../components/Item";
import StoreBar from "../components/StoreBar";

export default class Store extends Component {

    componentDidMount() {
        fetch("STORE_ITEMS_BACKEND_LINK", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                storeItems: json
            })
        })
    }

    renderItems(title, items, layoutVertical) {
        return (
            <ItemList vertical={layoutVertical} title={title}>
                {items.map((item, index) => (
                    <Item />
                ))}
            </ItemList>
        )
    }

    render() {
        return(
            <div>
                <LargeBanner title={"Tienda"} subtitle="" show={true}/>
                <br />
                <StoreBar />
                <br />
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