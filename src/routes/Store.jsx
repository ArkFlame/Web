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
        fetch("http://66.70.179.171:6546/products", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(json => {

            let categoryProducts = new Map()

            json.map((product, key) => {
                if (!categoryProducts.has(product.category)) {
                    categoryProducts.set(product.category, []);
                }

                categoryProducts.get(product.category).push(product);
            })

            this.setState({
                storeItems: categoryProducts
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

    renderStoreBar(categories) {
        if(this.state.storeItems != null) return <StoreBar categories={Array.from(categories.keys())} />
        else return <div />
    }

    render() {
        if(this.state.storeItems != null)
        return(
            <div>
                <LargeBanner title={"Tienda"} subtitle="" show={true}/>
                <br />
                {this.renderStoreBar(this.state.storeItems)}
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