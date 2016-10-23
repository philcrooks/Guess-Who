var React = require('react');

var MenuQuestion = require('./menu_question.jsx');
var MenuAnswer = require('./menu_answer.jsx');
var AskQuestion = require('./ask_question.jsx');

var Menus = React.createClass({

  makeAnswerMenu: function(chosenQuestion) {
    var menuValues = [];
    for (var character of this.props.characters) {
      var value = character[chosenQuestion];
      var index = menuValues.indexOf(value);
      if (index < 0) menuValues.push(value);
    }
    menuValues.sort();
    return menuValues;
  },

  getAnswer: function () {
    var menu = this.makeAnswerMenu(this.state.questionChoice);
    return menu[this.state.answerChoice];
  },

  getInitialState: function() {
    return({
      questionChoice: "name",
      answerChoice: 0
    })
  },

  setQuestionChoice: function(chosenItem) {
    // The top-level menu has been changed. The children must be reset.
    // This change will cause the menus to be redrawn
    this.setState({
      questionChoice: chosenItem,
      answerChoice: 0
    });
  },

  setAnswerChoice: function(index, character) {
    // Have a new list of filtered characters
    // This change will cause the menus to be redrawn
    this.setState({answerChoice: index})
  },

  askQuestion: function() {
    console.log("Queston:", this.state.questionChoice, "Answer:", this.getAnswer());
    this.props.handleChange(this.state.questionChoice, this.getAnswer());
  },

  render: function() {
    var answerMenu = this.makeAnswerMenu(this.state.questionChoice);
    return(
      <div className="menus">
        <MenuQuestion
          menuIndex={this.state.questionChoice}
          handleChange={this.setQuestionChoice}>
        </MenuQuestion>
        <MenuAnswer
          menuIndex={this.state.answerChoice}
          answerMenu={answerMenu}
          handleChange={this.setAnswerChoice}>
        </MenuAnswer>
        <AskQuestion
          handleClick={this.askQuestion}>
        </AskQuestion>
      </div>
    )
  }
})

module.exports = Menus;