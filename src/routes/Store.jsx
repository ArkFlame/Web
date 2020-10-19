import React, {Component} from 'react';

import "../routes/Home.css"
import LargeBanner from "../components/LargeBanner";
import ItemList from "../components/ItemList";
import Item from "../components/Item";
import StoreBar from "../components/StoreBar";
import LargeDescriptionSection from "../components/LargeDescriptionSection";

export default class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            storeItems: null
        }
    }

    componentDidMount() {
        fetch("http://localhost/aaaaa.json", {
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

    renderStoreBar() {
        if(this.state.storeItems != null) return <StoreBar categories={this.state.storeItems} />
        else return <div></div>
    }

    render() {
        if(this.state.storeItems != null)
        return(
            <div>
                <LargeBanner title={"Tienda"} subtitle="" show={true}/>
                <br />
                {this.renderStoreBar()}
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
        else return (
            <div>
                <LargeBanner title={"Tienda"} subtitle={""} show={true} />
                <br />
                <LargeDescriptionSection title={"Ups..."} subtitle={"Ocurrió un error. Contactanos mediante Discord."} show={true} />
            </div>
        )
    }
}