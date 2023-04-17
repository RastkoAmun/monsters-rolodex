import Card from './Card'
import './card-list.styles.css'

const CardList = ({ monsters }) => {
  return(
    <div className='card-list'> 
      {monsters.map(monster => {
        return <div key={monster.id}> <Card monster={monster}/> </div>
      })}
    </div>
  )
}

export default CardList;