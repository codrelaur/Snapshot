import React from 'react'
import SearchBar from "./SearchBar";
import Buttons from './ButtonSection';
import Gallery from './PictureGallery';

import "./styles.css";
import { render } from "react-dom";

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {searchKeyword:''}
      this.updateClick= this.updateClick.bind(this)
      }
        updateClick(keyword){
          this.setState({searchKeyword:keyword}) 
        }
  render() {
    return (
    <div className="App">
      <h1>SnapShot</h1>
      <SearchBar updateKeyword={(newKeyword) => this.setState({searchKeyword:newKeyword})}
                  keyword={this.state.searchKeyword}
      />
      <div className='button-section'>
        <Buttons handleClick={(keyword) => this.updateClick(keyword)}/>
      </div>
      <Gallery searchWord={this.state.searchKeyword}/>
    </div>
  );
}
}
