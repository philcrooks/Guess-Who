var React = require('react');

var Card = function (props) {

  return(
    <div className="card">
      <img src={props.character.image} width={200} height={300} mode='fit'/>
      <p>Name: {props.character.name}</p>
      <p>Gender: {props.character.gender}</p>
      <p>House: {props.character.house}</p>
      <p>Ancestry: {props.character.ancestry}</p>
      <p>Eye colour: {props.character.eyeColour}</p>
      <p>Hair colour: {props.character.hair}</p>
      <p>Hidden: {props.character.hidden.toString()}</p>      
    </div>
  )
}

module.exports = Card;
