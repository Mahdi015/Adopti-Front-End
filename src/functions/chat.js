import axios from "axios";

export const checkConversation = async (senderId, receiverId) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/chat/checkConversation`,
    { senderId, receiverId }
  );
};

export const createConversation = async (senderId, receiverId) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/chat/createConversation`,
    { senderId, receiverId }
  );
};

export const getMessages = async (conversationId) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/chat/getMessage/${conversationId}`,
    {}
  );
};

export const createMessage = async (senderId, conversationId, text) => {
  return await axios.post(`${process.env.REACT_APP_API}/chat/createMessage`, {
    senderId,
    conversationId,
    text,
  });
};
export const getSenderImg = async (senderId) =>
  await axios.get(
    `${process.env.REACT_APP_API}/chat/getSenderImg/${senderId}`,
    {}
  );
