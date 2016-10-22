var React = require('react');

var Menus = require('./menus/menus.jsx');
var Cards = require('./cards/cards.jsx')

var Container = React.createClass({

  getInitialState: function() {
    return { unknownCharacter: null };
  },

  componentDidMount: function() {
    this.setState( { unknownCharacter: this.props.characters[3] } );
  },

  questionSelected: function(question, answer) {
    // If the answer is YES remove all those that do share the attribute
    console.log(question, answer);
    hideCharacter = (unknownCharacter[question] !== answer);
    for (var character of this.props.characters) {
      character.hidden = hideCharacter && (characters[question] === answer);
    }
  },

  render: function() {
    return (
      <div className="container">
        <Menus
          characters={this.props.characters}
          handleChange={this.questionSelected}>
        </Menus>
        <Cards
          characters={this.props.characters}>
        </Cards>
      </div>
    )
  }
});

module.exports = Container;