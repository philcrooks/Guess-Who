var React = require('react');

var Notification = function(props) {

  return(
    <p className="notification">{props.children}</p>
  )

};

module.exports = Notification;