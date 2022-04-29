import React from "react";

import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";

const App = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="col-1 ">
          <img
            src="https://uikit.lewagon.com/assets/logo-57f7cc2a977ba6dae9243c48b9469d5b6e588a2654f7b16152f871ced54b57f2.png"
            alt="logo"
          />
        </div>

        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
