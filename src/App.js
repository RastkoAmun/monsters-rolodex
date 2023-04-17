import { useEffect, useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';
import './App.css'

const App = () => {
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);
  const [ searchField, setSearchField ] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const handleEvent = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString);
  }

  return(
    <div className="App">
      <h1 className='app-title'> Monster Rolodex </h1>
      <SearchBar handler={handleEvent} 
        placeholder='search monsters' 
        className='search-bar'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}


export default App;
