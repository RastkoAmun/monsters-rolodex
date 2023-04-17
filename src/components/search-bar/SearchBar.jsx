import { Component } from "react";
import './search-bar.css'

class SearchBar extends Component{
  render(){
    const { handler, placeholder, className } = this.props;
    return(
      <input 
        className={`search-bar ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={handler}/> 
    )
  }
}

export default SearchBar;