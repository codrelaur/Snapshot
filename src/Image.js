import React from 'react';

export default class Image extends React.Component{
  render(){
    return (<>
    <div>
      <img src={this.props.imagelink}
            width='200px'
            />
      <p className='image-title'>{this.props.title}
      </p>
      </div>
    </> 
    )
  }
}