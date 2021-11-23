import React, { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { getSenderImg } from "../../functions/chat";

export default function Message({ own, curentConversation, m, scrollRef }) {
  const [sender, setsender] = useState([]);
  useEffect(() => {
    getSenderImg(m.senderId).then((res) => {
      setsender(res.data);
    });
  }, [m]);
  return (
    <div ref={scrollRef} className={own ? "message own" : "message"}>
      <div className="messageTop">
        {sender && <img className="messageImg" src={sender.picture} />}
        <p className="messageText">{m.text}</p>
      </div>

      <div className="messageBottom">
        <ReactTimeAgo date={m.createdAt} locale="en-US" />
      </div>
    </div>
  );
}
