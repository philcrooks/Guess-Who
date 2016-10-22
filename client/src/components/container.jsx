var React = require('react');

var Menus = require('./menus/menus.jsx');
var Cards = require('./cards/cards.jsx')

var Container = React.createClass({

  getInitialState: function() {
    var hidden = []
    for (var i = 0; i < this.props.characters.length; i++) {
      hidden.push(false);
    }
    var randomNo = Math.floor(Math.random() * 8);
    return { unknownCharacter: this.props.characters[randomNo], hiddenCharacters: hidden } ;
  },

  questionSelected: function(question, answer) {
    // If the answer is YES remove all those that do not share the attribute
    // If the answer is NO remove all those that share the attribute
    var hidden = [];
    var characters = this.props.characters;
    var answerIsYes = (this.state.unknownCharacter[question] === answer);
    var answerIsNo = !answerIsYes
    for (var i = 0; i < characters.length; i++) {
      hidden[i] = ((answerIsNo && (characters[i][question] === answer)) ||
                  (answerIsYes && (characters[i][question] !== answer)) ||
                  this.state.hiddenCharacters[i]);
    }
    this.setState( {hiddenCharacters: hidden } )
  },

  gameWon: function() {
    var count = 0;
    this.state.hiddenCharacters.forEach(function(flag) {
      if (!flag) count++;
    })
    return (count === 1);
  },

  render: function() {
    return (
      <div className="container">
        <Menus
          characters={this.props.characters}
          handleChange={this.questionSelected}>
        </Menus>
        <Cards
          characters={this.props.characters}
          hidden={this.state.hiddenCharacters}>
        </Cards>
      </div>
    )
  }
});

module.exports = Container;