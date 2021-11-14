import React, { useState, useEffect } from "react";
import "../Feed/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from "../Post/Post";
import { db } from "../Firebase/Firebase";
import firebase from 'firebase'


function Feed() {
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc) =>(
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: "Hamza Mohamed",
      description: "This is a test", 
      message: input,
      photoUrl:"", 
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  }
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button  onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          {/* Input options */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalenderViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}
      <Post name="Hamza A Mohamed" description="This is a test" message="Wow this worked" />
    </div>
  );
}

export default Feed;
