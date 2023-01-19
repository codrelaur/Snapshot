import React from 'react';
import Image from './Image'

export default class Gallery extends React.Component {
  constructor(props){
    super(props)
    this.state = {imagesArray:[], total:0}
  }
  componentDidUpdate(previousProps){
    if (this.props.searchWord !== previousProps.searchWord) {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${this.props.searchWord}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(jsonResponse => 
      this.setState({imagesArray:jsonResponse.photos.photo, total:jsonResponse.photos.total})
  )  
  
  }
  }
  render() {
    return (<>
     {this.props.searchWord && <h2>{ this.props.searchWord.charAt(0).toUpperCase()
      + this.props.searchWord.slice(1)} Pictures (Total:{this.state.total})
      </h2>
     }
    
      <div className='flex-gallery'>

        {this.state.imagesArray.map((image,i) => <Image 
        imagelink={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
        title={image.title}
        key={i}/>)}
      </div>
    </>)
  }
}