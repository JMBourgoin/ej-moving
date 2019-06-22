import React from 'react';

class NavBarContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className='nav-container container-fluid'>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <h2>contact: <a href="mailto:jason@jmbourgoin.com?subject=Moving%20Sale%20Inquiry">jason@jmbourgoin.com</a></h2>
                    <h1 className='nav-head'>E & J's MOVING SALE</h1>
                    <ul className='nav-list d-flex flex-row-reverse'>
                        <li><a href="./index.html#/furniture">furniture</a></li>
                        <li><a href="./index.html#/electronics">electronics</a></li>
                        <li><a href="./index.html#/">ALL</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default NavBarContainer;