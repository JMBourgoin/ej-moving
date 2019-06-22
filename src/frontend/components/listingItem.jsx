import React from 'react';

class ListingItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      const imageArr = this.props.images; 
      const images = imageArr.map(img =>{
          return <img className='thumbnail' src={img} alt="pic"/>
      }); 

        const price = <h2 className="price">${this.props.price}</h2>;

    return (
        <div className='listing-item'>
            <div>
                <h1 className='listing-title'>{this.props.title}: {price}</h1>
                <div className='line-break'></div>
                <p className='listing-description'>{this.props.description}</p>
                <div className='listing-pics'>
                    {images}
                </div>
            </div>
        </div>
    )
    }
}

export default ListingItem;