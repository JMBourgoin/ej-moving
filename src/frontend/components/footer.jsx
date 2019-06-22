import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='footer'>
                <h6>no deliveries available</h6>
                <h5>contact: <a href="mailto:jason@jmbourgoin.com?subject=Moving%20Sale%20Inquiry">jason@jmbourgoin.com</a></h5>
                <h6>ALL ITEMS available for pickup from Inwood, NYC</h6>
            </div>
        )
    }
}

export default Footer;