import React from 'react';
import { useSelector } from 'react-redux';

const Message = () => {
  const messageData = useSelector(state => state.message.message);

  if (messageData.isLoading) {
    return <p>Loading...</p>;
  }

  if (!messageData.message) {
    return <p>No message available</p>;
  }

  return <h1>{messageData.message}</h1>;
};

export default Message;
