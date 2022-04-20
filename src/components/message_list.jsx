import React, { Component } from "react";
import PropTypes from "prop-types";

class MessageList extends Component {
  renderList = () => {
    return this.props.cities.map((message) => {
      return <message message={message} key={message.name} />;
    });
  };
  render() {
    return <div className="cities">{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    activemessage: state.activemessage,
  };
}
