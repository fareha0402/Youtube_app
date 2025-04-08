import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg w-6/12">
      <div>
        <img
          alt="user"
          className="w-12 h-12"
          src="https://tse3.mm.bing.net/th?id=OIP.F977i9e7dMrznvOT8q8azgHaEf&pid=Api&P=0&h=180"
        ></img>
      </div>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
    </div>
  );
};

export default Comment;
