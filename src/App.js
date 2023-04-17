import { Component } from 'react'
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleEvent = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }))
  }

  render(){
    const { monsters, searchField } = this.state;
    const { handleEvent } = this

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 className='app-title'> Monster Rolodex </h1>
        <SearchBar handler={handleEvent} 
          placeholder='search monsters' 
          className='search-bar'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }  
}

export default App;
