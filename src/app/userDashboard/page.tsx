"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";


export default function UserDashboardPage(){
    return(
        <div className="container-fluid bg-white">
            <header className="mx-auto px-20 sticky top-0 bg-white">
                <div className="flex justify-between h-24 items-center">
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
                    <p className="text-4xl font-bold text-black text-center">Welcome, John!</p>
                </div>
                <div className="mt-3 flex justify-center items-center">
                    <div className="w-[400px]">
                        <p className="text-base text-black text-center">DataDialogue uses state-of-the-art AI to let you chat with your database like you do with teammates.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="mt-6 text-base h-10 bg-blue-900 text-white font-semibold rounded py-2 px-4">
                        Start chatting with your data
                    </p>
                </div>
            </div>

            <div className="blue-main h-[555px] bg-blue-300 mx-auto px-20 py-8">
                <div className="mt-3 flex justify-center items-center">
                    <div className="h-7 w-52 rounded-full bg-white flex justify-center items-center border-[1.5px] border-blue-500 ">
                        <p className="text-sm font-semibold text-blue-500 text-center">AVAILABLE DATABASES</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <p className="text-3xl font-bold text-white text-center">Public Databases</p>
                </div>
                <div className="mt-1 flex justify-center items-center">
                    <div className="w-[390px]">
                        <p className="mt-1 text-base text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-14">
                    <div className="grid grid-cols-5 w-[750px]">
                        {/* <button className="p-5 text-sm h-16 w-16 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                            A
                        </button> */}
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="grid grid-row-2">
                                <div className="row-span-1 flex justify-center items-center">
                                    <button className="p-5 text-sm h-16 w-16 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                                        A
                                    </button>
                                </div>
                                <div className="row-span-1 flex justify-center items-center mt-3">
                                    <p className="mt-1 text-base text-white text-center">Database A</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="grid grid-row-2">
                                <div className="row-span-1 flex justify-center items-center">
                                    <button className="p-5 text-sm h-16 w-16 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                                        B
                                    </button>
                                </div>
                                <div className="row-span-1 flex justify-center items-center mt-3">
                                    <p className="mt-1 text-base text-white text-center">Database B</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="grid grid-row-2">
                                <div className="row-span-1 flex justify-center items-center">
                                    <button className="p-5 text-sm h-16 w-16 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                                        C
                                    </button>
                                </div>
                                <div className="row-span-1 flex justify-center items-center mt-3">
                                    <p className="mt-1 text-base text-white text-center">Database C</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="grid grid-row-2">
                                <div className="row-span-1 flex justify-center items-center">
                                    <button className="p-5 text-sm h-16 w-16 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                                        D
                                    </button>
                                </div>
                                <div className="row-span-1 flex justify-center items-center mt-3">
                                    <p className="mt-1 text-base text-white text-center">Database D</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="grid grid-row-2">
                                <div className="row-span-1 flex justify-center items-center">
                                    <button className="p-5 text-sm h-16 w-16 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                                        E
                                    </button>
                                </div>
                                <div className="row-span-1 flex justify-center items-center mt-3">
                                    <p className="mt-1 text-base text-white text-center">Database E</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* <button className="p-5 text-sm h-16 w-16 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-500 flex justify-center items-center">
                            A
                        </button> */}
                    </div>
                </div>
                {/* <div className="flex justify-center items-center mt-14">
                    <div className="grid grid-cols-5 w-[580px]">
                        <p className="text-sm text-white font-base flex justify-center items-center">
                            Database A
                        </p>
                        <p className="text-sm text-white font-base flex justify-center items-center">
                            Database B
                        </p>
                        <p className="text-sm text-white font-base flex justify-center items-center">
                            Database C
                        </p>
                        <p className="text-sm text-white font-base flex justify-center items-center">
                            Database D
                        </p>
                        <p className="text-sm text-white font-base flex justify-center items-center">
                            Database E
                        </p>
                    </div>
                </div> */}


                <div className="flex justify-center items-center mt-14">
                    <p className="text-3xl font-bold text-white text-center">Access Any Private Database</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center h-16 items-center px-16 w-[575px]">
                        <div className="w-3/4">
                            <input className="w-full rounded-sm h-8 border border-gray-400 text-black"
                                id="key" 
                                type="text"
                                // value={user.email}
                                // onChange={(e) => setUser({...user, email: e.target.value})}
                            />
                        </div>
                        <div className="w-1/4 justify-end flex flex-row">
                            <button className="ml-6 text-xs h-7 bg-blue-900 text-white font-semibold rounded py-1 px-4 tracking-widest hover:bg-blue-500">
                                Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
    )
}