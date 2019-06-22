import { Route } from 'react-router-dom';
import React from 'react';
import NavBarContainer from './frontend/components/navbar';
import ItemsIndexContainer from './frontend/components/itemsIndexContainer';
import ElectronicsContainer from './frontend/components/electronicsContainer';
import FurnitureContainer from './frontend/components/furnitureContainer';
import Footer from './frontend/components/footer';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        var props = this.props;
        return (
            <div className="app-container">
                <Route path="/" component={NavBarContainer} />
                <Route exact path="/" render={ (props) => <ItemsIndexContainer {...props}/> } />
                <Route exact path="/electronics" render={(props) => <ElectronicsContainer {...props} />} />
                <Route exact path="/furniture" render={(props) => <FurnitureContainer {...props} />} />
                <Route path="/" component={Footer}/>
                <div className="main-container">
                </div>
            </div>
        );
    }  
}

export default App;
