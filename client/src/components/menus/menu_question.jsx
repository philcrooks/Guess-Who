var React = require('react');

var MenuQuestion = function(props) {

  var handleChange = function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    props.handleChange(newIndex);
  }

  return (
    <div className="menu-question">
      <select id="menu-question" value={props.menuIndex} onChange={handleChange}>
        <option value="name">Is their name</option>
        <option value="gender">Are they</option>
        <option value="house">Is their house</option>
        <option value="ancestry">Is their ancestry</option>
        <option value="eyeColour">Are their eyes</option>
        <option value="hairColour">Is their hair</option>
      </select>
    </div>
  )
};

module.exports = MenuQuestion;