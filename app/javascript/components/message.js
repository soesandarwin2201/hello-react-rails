import React from 'react';
import { useSelector } from "react-redux";

const Message = () => {
  const greeting = useSelector((state) => state.message);
     return ( 
          <h1>{greeting.message}</h1>
      );
}
 
export default Message;