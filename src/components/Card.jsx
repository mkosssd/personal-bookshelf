import React from 'react'
import './card.css'
export default function Card(props) {
  // console.log(props);
  console.log(props);
    const prop = props.props
    function addToShelf(prop){
      let shelf = localStorage.getItem('shelf');
      try {
        shelf = JSON.parse(shelf);
      } catch (e) {
        shelf = [];
      }      
      if (!Array.isArray(shelf)) {
        shelf = [];
      }
    
      shelf.push(prop);
    
      localStorage.setItem('shelf', JSON.stringify(shelf));
    }
  return (
    <div className='card'>
        <p> <span className='font-weight-bold'>Title: </span> {prop.title}</p>
        {!props.isShelf && <button onClick={()=>addToShelf(prop)}>Add to my bookshelf</button>}
        {/* <p>{prop.lending_edition_s}</p> */}
    </div>
  )
}
