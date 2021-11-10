import React from "react";
import "../Feed/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay'

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          {/* Input options */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#70B5F9" />
          <InputOption Icon={CalenderViewDayIcon} title="Write article" color="#70B5F9" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
