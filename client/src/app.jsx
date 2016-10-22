var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./components/container.jsx');
var characters = require("./characters")

window.onload = function(){
  ReactDOM.render(
    <Container characters={characters}></Container>,
    document.getElementById('app')
  );
}
