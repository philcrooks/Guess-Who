var React = require('react');

var Menus = require('./menus/menus.jsx');
var Card = require('./cards/card.jsx');
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
    // These changes will force the re-render.
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
        message = this.state.unknownCharacter.name + " is the chosen one.";
      else {
        message = "The answer is ";
        message += (this.state.answerIsYes) ? "'Yes'." : "'No'." ;
      }
    }

    var cards = this.props.characters.map(function(character, index){
      return <Card
                key={index}
                character={character}
                hide={this.state.hiddenCharacters[index]}>
              </Card>
    }.bind(this))

    return (
      <div className="container">
        <div className="menu-container">
          <img src="images/logo.png" />
          <Menus
            characters={this.props.characters}
            handleChange={this.questionSelected}>
          </Menus>
          <Notification>{message}</Notification>
        </div>
        {cards}
      </div>
    )
  }
});

module.exports = Container;