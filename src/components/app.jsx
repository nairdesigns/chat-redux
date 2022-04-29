import React from "react";
import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";

const App = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="col-1 ">put logo here</div>
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
