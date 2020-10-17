import React, {Component} from 'react';

import "../routes/Home.css"
import LargeDescriptionSection from '../components/LargeDescriptionSection';

export default class Store extends Component {
    render() {
        return(
            <div>
                <LargeDescriptionSection
                    title={["WIP"]} subtitle={""} show={true} />
            </div>
        )
    }
}