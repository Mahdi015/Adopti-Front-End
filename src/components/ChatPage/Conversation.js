import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { checkConversation } from "../../functions/chat";

export default function Conversation({
  userChat,
  setcurentConversation,
  setnewConvButton,
  setdestinity,
  setdestinityId,
}) {
  const { user } = useSelector((state) => ({ ...state }));
  const [currUser, setcurrUser] = useState(false);
  useEffect(() => {
    if (user.fname == userChat.fname) {
      setcurrUser(true);
    }
  }, []);
  const handleClick = () => {
    setcurentConversation(null);
    setnewConvButton(false);
    setdestinity(userChat.fname);
    setdestinityId(userChat._id);
    checkConversation(user._id, userChat._id).then((res) => {
      console.log(res.data);
      if (res.data.ok) {
        setnewConvButton(true);
        return;
      }
      setcurentConversation(res.data);
    });
  };
  return (
    <div>
      {currUser ? (
        ""
      ) : (
        <div onClick={() => handleClick()} className="conversation">
          <img className="conversationimg" src={userChat.picture} />
          <span className="conversationName">{userChat.fname}</span>
        </div>
      )}
    </div>
  );
}
