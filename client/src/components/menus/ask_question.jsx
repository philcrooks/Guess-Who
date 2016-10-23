var React = require('react');

var AskQuestion = function(props) {

  var handleClick = function(event) {
    props.handleClick();
  }

  return(
    <button className="ask-question" onClick={handleClick}>?</button>
  )

};

module.exports = AskQuestion;