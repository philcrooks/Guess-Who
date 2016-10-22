var React = require('react');

var Menus = require('./menus/menus.jsx');
var Cards = require('./cards/cards.jsx')

var Container = React.createClass({

  getInitialState: function() {
    var hidden = []
    for (var i = 0; i < this.props.characters.length; i++) {
      hidden.push(false);
    }
    return { unknownCharacter: this.props.characters[0], hiddenCharacters: hidden } ;
  },

  questionSelected: function(question, answer) {
    // If the answer is YES remove all those that do share the attribute
    var hidden = [];
    var characters = this.props.characters;
    var hideCharacter = (this.state.unknownCharacter[question] !== answer);
    for (var i = 0; i < characters.length; i++) {
      hidden[i] = ((hideCharacter && (characters[i][question] === answer)) ||
                  this.state.hiddenCharacters[i]);
    }
    this.setState( {hiddenCharacters: hidden } )
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