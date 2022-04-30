import React, { Component } from "react";
// import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMessages } from "../actions";
import Message from "../components/message";
import MessageForm from "../containers/message_form";

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };
  render() {
    return (
      <div className="col channel-title p-4">
        <div className="row">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-container row">
          <div
            className="channel-content"
            ref={(list) => {
              this.list = list;
            }}
          >
            {this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })}
          </div>
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
