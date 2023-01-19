import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {keyword:''}
    this.resolveClick = this.resolveClick.bind(this)
  }
  resolveClick(value) {
    this.props.updateKeyword(value) 
    }
  componentDidUpdate(prevProps){
    if(this.props.keyword !== prevProps.keyword)
    this.setState({keyword:this.props.keyword}) 
  }
  render() {
    return (<>
      <input  className='search-bar'
              type='text'
            placeholder='Type here...'
            onChange={(event) => {
               this.setState({keyword:event.target.value})
            }}
            value={this.state.keyword}
            />
      <button onClick={() => this.resolveClick(this.state.keyword)}>
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#000"
            fillRule="evenodd"
          />
        </svg>
      </button>     
    </>)
  }
} 