"use client";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Chat() {
  const [inputValue, setInputValue] = useState(""); // State to track user input
  const [messages, setMessages] = useState<string[]>([]);

  // const [messages, setMessages] = useState([]); // State to track list of messages

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    if (inputValue.trim() !== "") {
    // Add new message to the list
    setMessages([...messages, inputValue]);
    // Clear the input field
    setInputValue("");
    }
  };

  return (
    // <html lang="en">
    //   <head>
    //     <meta charSet="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <link
    //       href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    //       rel="stylesheet"
    //     />
    //     <title>Tailwind Dashboard</title>
    //   </head>
      //  <body className="font-poppins h-screen">
        <div className="container font-poppins flex  h-screen h-full">
          <div className="left_div flex flex-col border-r border-gray-700 flex-1/5 h-full">
            <div className="logo text-center my-5 pb-3 border-b border-gray-700">
              <h2  className="text-2xl text-blue-900 font-poppins font-bold">DataDialogue</h2>
            </div>
            <div className="chat_list flex-1 overflow-auto p-5 pt-0">
              <p className="text-gray-700 mb-2">Your Conversations</p>
              <div className="chat_item flex items-center mb-5">
                <Image className="chat_icon w-8 h-8 mr-3" src="/db_icon.png" alt="chat_icon" width={8} height={8} layout="fixed" />
                <div className="chat_name">
                  <p>Chat Name string</p>
                </div>
              </div>
              <div className="chat_item flex items-center mb-5">
                <img className="chat_icon w-8 h-8 mr-3" src="db_icon.png" alt="chat_icon" />
                <div className="chat_name">
                  <p>Chat Name string</p>
                </div>
              </div>
            </div>
            <div className="profile text-center ml-5 p-2 mr-5 flex border-t border-gray-700">
              <div className="profile_icon text-2xl bg-blue-900 text-white w-10 h-10 rounded-full mb-2 "> J </div>
              <div className="profile_name font-bold ml-2">John Doe </div>
            </div>
          </div>
          <div className="right_div flex-grow flex flex-col h-full">
            <div className="conv_hist flex flex-1 flex-col m-5 relative">
              <div className="message_lst mt-auto">
                {/* Render messages */}
                {messages.map((message, index) => (
                  <div key={index} className="message_item bg-white p-4 flex items-center">
                    <div className="message_icon bg-blue-900 text-center text-xl pt-1 text-white w-10 h-10 rounded-full mr-3">I</div>
                    <div className="message">{message}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="search-bar flex flex-0 border-t border-gray-700 ml-5 mr-5 mb-2 mt-2 p-3">
              <input
                type="text"
                placeholder="What do you need from data?"
                className="w-11/12 px-4 py-2 border-none"
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="w-1/12 ">
                <button
                  className="search_bt  ml-4 mr-2 rounded-full p-5 h-full bg-blue-900"
                  onClick={handleSearchClick}
                >
                  <img className="arrow_icon" src="arrow.svg" alt="search button" />
                </button>
              </div>
            </div>
          </div>
        </div>
      //  </body>
    // </html>
  );
}
