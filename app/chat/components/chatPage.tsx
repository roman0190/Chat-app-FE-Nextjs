"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";




const ChatPage = ({list,data}) => {

  const sender ="abul"
  const [receiver, setReceiver] = useState("");
  
  
  const listClick = (name) => {
    setReceiver(name);
  };
  

 
  return (
    <div className="full-page flex bg-black ">
      <div className="flex flex-col h-screen w-1/5 overflow-hidden text-white  rounded-t-lg ">
        <span className="flex flex-wrap bg-blue-400 text-center justify-center w-full p-4 text-4xl font-bold rounded-t-lg shadow-sm shadow-gray-800">
          User list
        </span>
        <div className="overflow-y-scroll shadow-sm shadow-gray-800 pb-2">
          {list.map((item, index) => (
            <>
              <div className="rounded-b-lg shadow-sm shadow-gray-800 hover:shadow-white items-center pl-2 p-3 text-gray-500 hover:text-white bg-neutral-900/15">
                <button
                  className="flex items-center"
                  key={index}
                  onClick={() => {
                    listClick(item.receiver);
                  }}
                >
                  <Image
                    src="/"
                    alt="alt"
                    width={40}
                    height={40}
                    className="rounded-full bg-fuchsia-400 mr-2"
                  />
                  {item.receiver}
                </button>
                <p className="text-sm pl-12"> latest massage...</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="h-screen w-full ">
        <div className="flex flex-wrap bg-blue-300 text-center w-full p-5 text-2xl font-bold rounded-t-lg">
          User Name
        </div>
        <div className="relative overflow-hidden">
          <div className="bg-black h-[86vh] rounded-e-2xl shadow-sm shadow-gray-800 flex flex-col overflow-y-auto ">
            {data.map((message) => (
              <div
                className={`p-4 rounded-lg mb-4 ${
                  message.sender === `${sender}`
                    ? "bg-blue-500 text-white self-end "
                    : "bg-gray-500 text-black self-start"
                }`}
                key={message.id}
              >
                {message.message}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-slate-500 w-full text-amber-50 h-[3.5rem] px-2 mt-1 border-2"
            />
            <button className="w-20 border-2 flex justify-center items-center h-[3.5rem] mt-1">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
