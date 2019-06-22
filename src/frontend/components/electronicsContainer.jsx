import React from 'react';
import data from './salesItems.json';
import ListingItem from './listingItem';

class ElectronicsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.data = data.filter(obj => {return (obj.type === "electronics")});
    }

    render() {
        let listings = this.data.map(listing => {
            return <li><ListingItem {...listing} /></li>
        });

        return (
            <div className="listings">
                <ul>
                    {listings}
                </ul>
            </div>
        )
    }
}

export default ElectronicsContainer;