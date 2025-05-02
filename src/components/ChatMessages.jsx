import React from "react";

const ChatMessages = ({ name, messages }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        alt="user"
        src="https://tse3.mm.bing.net/th?id=OIP.F977i9e7dMrznvOT8q8azgHaEf&pid=Api&P=0&h=180"
        className="h-5"
      ></img>
      <span className="font-black px-2">{name}</span>
      <span>{messages}</span>
    </div>
  );
};

export default ChatMessages;
