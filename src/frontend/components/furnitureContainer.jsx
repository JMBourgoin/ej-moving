import React from 'react';
import data from './salesItems.json';
import ListingItem from './listingItem';

class FurnitureContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.data = data.filter(obj => { return (obj.type === "furniture")});
    }

    render() {
        debugger
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

export default FurnitureContainer;