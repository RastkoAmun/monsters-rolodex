import { Component } from 'react'

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
      }, () => { console.log(this.state)}))
  }


  render(){
    const { monsters, searchField } = this.state;
    const { handleEvent } = this

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search robots' onChange={handleEvent}/> 
        {filteredMonsters.map(monster => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
        )})}
      </div>
    );
  }  
}

export default App;
