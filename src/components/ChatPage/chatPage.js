import React, { useState, useEffect, useRef } from "react";
import {
  createConversation,
  createMessage,
  getMessages,
} from "../../functions/chat";
import { getAllUSers } from "../../functions/user";
import ChatOnline from "./ChatOnline";
import Conversation from "./Conversation";
import Message from "./message";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import "./Chatpage.css";
export default function ChatPage() {
  const [users, setusers] = useState([]);
  const socket = useRef();
  const [messages, setmessages] = useState([]);
  const [curentConversation, setcurentConversation] = useState(null);
  const [newConvButton, setnewConvButton] = useState(false);
  const [destinity, setdestinity] = useState("");
  const [text, settext] = useState("");
  const [instantMessage, setinstantMessage] = useState(null);
  const [destinityId, setdestinityId] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const scrollRef = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setinstantMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
      console.log(setinstantMessage);
    });
  }, []);
  useEffect(() => {
    instantMessage &&
      curentConversation?.chatUsers.includes(instantMessage.senderId) &&
      setmessages((prev) => [...prev, instantMessage]);
  }, [instantMessage, curentConversation]);
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [user._id]);
  const loadUsers = () => {
    getAllUSers().then((res) => {
      setusers(res.data);
    });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const getAllMessages = () => {
    getMessages(curentConversation._id).then((res) => {
      setmessages(res.data);
      console.log(messages);
    });
  };
  useEffect(() => {
    {
      curentConversation && getAllMessages();
    }
  }, [curentConversation]);
  const handleClick = () => {
    createConversation(user._id, destinityId).then((res) => {
      console.log(res.data);
      setcurentConversation(res.data);
      setnewConvButton(false);
    });
  };
  const handleSendMsg = () => {
    {
      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId: destinityId,
        text,
      });
      curentConversation &&
        createMessage(user._id, curentConversation._id, text).then((res) => {
          console.log(res.data);
          settext("");
          getAllMessages();
        });
    }
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [messages]);
  return (
    <div className="messenger section-padding">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input type="text" placeholder="Shearch" className="chatMenuInput" />
          {users &&
            users.map((u) => (
              <Conversation
                setcurentConversation={setcurentConversation}
                userChat={u}
                setnewConvButton={setnewConvButton}
                setdestinity={setdestinity}
                setdestinityId={setdestinityId}
              />
            ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            {curentConversation ? (
              <>
                {messages.map((m) => (
                  <Message
                    scrollRef={scrollRef}
                    m={m}
                    own={m.senderId != user._id}
                  />
                ))}
              </>
            ) : (
              <div className="ChoseUser">
                Chose A User To Start a Conversation
              </div>
            )}
            {newConvButton ? (
              <button
                onClick={() => handleClick()}
                className="chatSubmitButton2"
              >
                Start New Conversation With {destinity}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="chatBoxBottom">
            {curentConversation ? (
              <textarea
                onChange={(e) => settext(e.target.value)}
                placeholder="Write Your Message"
                className="chatMessageInput"
                value={text}
              ></textarea>
            ) : (
              ""
            )}
            {curentConversation ? (
              <button
                onClick={() => handleSendMsg()}
                className="chatSubmitButton"
              >
                Send
              </button>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
}
