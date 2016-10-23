var React = require('react');

var Menus = require('./menus/menus.jsx');
var Cards = require('./cards/cards.jsx');
var Notification = require('./notification.jsx')

var Container = React.createClass({

  getInitialState: function() {
    var hidden = []
    for (var i = 0; i < this.props.characters.length; i++) {
      hidden.push(false);
    }
    var randomNo = Math.floor(Math.random() * 8);
    return {
      unknownCharacter: this.props.characters[randomNo],
      hiddenCharacters: hidden
    } ;
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
    this.setState( {
      hiddenCharacters: hidden,
      answerIsYes: answerIsYes
    } )
  },

  gameOver: function() {
    var count = 0;
    this.state.hiddenCharacters.forEach(function(flag) {
      if (!flag) count++;
    })
    return (count === 1);
  },

  render: function() {
    var message = "";
    if (this.state.answerIsYes !== undefined) {
      if (this.gameOver())
        message = "You win! " + this.state.unknownCharacter.name + " was the chosen one.";
      else {
        message = "The answer is ";
        message += (this.state.answerIsYes) ? "YES." : "NO." ;
      }
    }

    return (
      <div className="container">
        <div className="menu-container">
          <Menus
            characters={this.props.characters}
            handleChange={this.questionSelected}>
          </Menus>
          <Notification>{message}</Notification>
        </div>
        <Cards
          characters={this.props.characters}
          hidden={this.state.hiddenCharacters}>
        </Cards>
      </div>
    )
  }
});

module.exports = Container;