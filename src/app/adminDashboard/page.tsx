"use client";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Chat() {

    const [showUserManagement, setShowUserManagement] = useState(false);
    const [showDatabaseManagement, setShowDatabaseManagement] = useState(false);

    const handleUserManagementClick = () => {
        setShowUserManagement(true);
        setShowDatabaseManagement(false); // Hide database management
    };

    const handleDatabaseManagementClick = () => {
        setShowUserManagement(false); // Hide user management
        setShowDatabaseManagement(true);
    };
  return (
    <div className="container-fluid bg-white">
            <header className="mx-auto px-20">
                <div className="flex justify-between h-24 sticky items-center">
                    <div className="w-1/4">
                        <p className="text-lg font-bold text-blue-900">DataDialogue</p>
                    </div>
                    <div className="w-3/4 justify-end flex flex-row">
                        <button className="ml-6 text-sm p-5 h-12 w-12 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                            J
                        </button>
                    </div>
                </div>
            </header>

            <div className="white-main mt-9 flex-row h-56 justify-items-center mx-auto px-20">
                <div className="flex justify-center items-center">
                    <p className="text-4xl font-bold text-black text-center">Welcome, Admin!</p>
                </div>
                <div className="mt-3 flex justify-center items-center">
                    <div className="w-[400px]">
                        <p className="text-base text-black text-center">DataDialogue uses state-of-the-art AI to let you chat with your database like you do with teammates.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                <div className="mt-6 flex">
                    <button id="mnguser_bt" className="text-base h-10 bg-blue-900 text-white font-semibold  rounded mr-5  py-2 px-8 " onClick={handleUserManagementClick}>Manage User</button>
                    <button id="mngdb_bt" className="text-base h-10 bg-blue-900 text-white font-semibold rounded py-2 px-4 " onClick={handleDatabaseManagementClick}>Manage Database</button>
                    
                </div>
                
                </div>
               
            </div>
{/* Manage Database section */}
        {showDatabaseManagement && (
            <div id="manage_db" className="blue-main h-[505px] bg-blue-300 mx-auto px-20 py-8">
                {/* <div className="mt-3 flex justify-center items-center">
                    <div className="h-7 w-52 rounded-full bg-white flex justify-center items-center border-[1.5px] border-blue-500 ">
                        <p className="text-sm font-semibold text-blue-500 text-center">AVAILABLE DATABASES</p>
                    </div>
                </div> */}
                <div className="flex justify-between mt-10 items-center ">
                    <p className="text-2xl font-bold text-white text-center">All Databases</p>
                    <button className="font-bold text-2xl text-white  rounded-full border-2 border-white px-2 ">+</button>
                </div>
                

                <div id="database_div" className="bg-white mt-5 mx-auto pb-2  ">
                    <div className="flex justify-between  items-center mx-3 border-b border-gray-500">
                        <p className="text-xl font-bold text-blue text-center p-2 pl-8">Database Name</p>
                        <p className="text-xl font-bold text-blue text-center p-2">Action</p>
                    </div>
                    <div id="db_element" className="flex justify-between  items-center my-1 mx-3 border-b border-gray-500 px-2 ">
                        <p className="text-xl  text-blue text-center p-2 pl-8">Database Number1</p>
                        <div id="db_action" className="">
                            <button className="font-bold text-2xl text-blue  rounded-full border-2 border-gray px-2 mr-2 ">-</button>
                            <button className="font-bold text-2xl text-blue  rounded-full border-2 border-gray px-2 ">+</button>
                        </div>
                    </div>
                </div>
                

            </div>
            )}
{/* Manage User section */}
      {showUserManagement && (

            <div id="manage_user" className="blue-main h-[505px] bg-blue-300 mx-auto px-20 py-8">
                <div className="flex justify-center mt-10 items-center ">
                    <p className="text-2xl font-bold text-white text-center">All Users</p>
                </div>
                

                <div id="user_div" className="bg-white mt-5 mx-auto pb-2 ">
                    <div className="flex justify-between  items-center mx-3 border-b border-gray-500">
                        <p className="text-xl font-bold text-blue text-center p-2 pl-8">User Name</p>
                        <p className="text-xl font-bold text-blue text-center p-2">Actions</p>
                    </div>
                    <div id="user_element" className="flex justify-between  items-center my-1 mx-3 border-b border-gray-500 px-2 ">
                        <p className="text-xl  text-blue text-center p-2 pl-8">User Number1</p>
                        <div id="user_action" className="">
                            <button className="font-bold text-2xl text-blue  rounded-full border-2 border-gray px-2 mr-2 ">-</button>
                            <button className="font-bold text-2xl text-blue  rounded-full border-2 border-gray px-2 ">+</button>
                        </div>
                    </div>
                </div>
                

            </div>
            )}

            <footer className="mx-auto px-20">
                <div className="h-36 pt-8">
                    <div>
                        <p className="text-xl font-bold text-blue-900">DataDialogue</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-1/4">
                            <p className="text-xs text-black">Powered by LLaMA</p>
                        </div>
                        <div className="w-3/4 justify-end flex flex-row">
                            <p className="pt-1 text-sm text-black mx-4">Terms of service</p>
                            <p className="pt-1 text-sm text-black mx-4">Privacy policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  );
}
