import React, {Component} from 'react';

import "./Item.css"

export default class Store extends Component {

    render() {
        return(
            <div class="item">
                <img src={"https://pbs.twimg.com/media/EkN49sRVcAIJ5gZ?format=jpg&name=small"} className={"itemImg"} /><br />
                <span className="subtitle">TÍTULO</span><br />
                <span className="desc-subtitle2">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</span>
            </div>
        )
    }
}