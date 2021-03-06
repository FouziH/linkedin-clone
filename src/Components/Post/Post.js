import { Avatar } from "@material-ui/core";
import React, {forwardRef} from "react";
import "../Post/Post.css";
import InputOption from "../InputOption/InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const  Post =  forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        {message ? message : <p>Message goes here</p>}
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey" />
        <InputOption Icon={SendOutlinedIcon} title="Like" color="grey" />
      </div>
    </div>
  );
})

export default Post;
