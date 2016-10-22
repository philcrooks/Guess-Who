var React = require('react');
var Card = require('./card.jsx');

var Cards = function (props) {

  var cards = props.characters.map(function(character, index){
    return <Card key={index} character={character} hide={props.hidden[index]}></Card>
  })

  return(
    <div className="cards">
      <div className="row-of-cards">
        {cards.slice(0, 4)}
      </div>
      <div className="row-of-cards">
        {cards.slice(4)}
      </div>
    </div>
  )
}

module.exports = Cards;