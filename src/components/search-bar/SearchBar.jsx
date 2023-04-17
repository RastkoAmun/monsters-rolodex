import './search-bar.css'

const SearchBar = (props) => {
  const { handler, placeholder, className } = props;
  return(
    <input 
      className={`search-bar ${className}`}
      type='search' 
      placeholder={placeholder}
      onChange={handler}/> 
  )
}

export default SearchBar;