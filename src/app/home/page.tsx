"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";
// import Link from "../../../node_modules/next/link";


export default function HomePage(){
    return(
        <div className="container-fluid bg-white">
            <header className="mx-auto px-20 sticky top-0 bg-white">
                <div className="flex justify-between h-24 sticky items-center">
                    <div className="w-1/4">
                        <p className="text-lg font-bold text-blue-900">DataDialogue</p>
                    </div>
                    <div className="w-3/4 justify-end flex flex-row">
                        <p className="pt-1 text-sm font-semibold text-gray-500 mx-6">Home</p>
                        <p className="pt-1 text-sm font-semibold text-gray-500 mx-6">Features</p>
                        <Link href="login">
                            <button className="ml-6 text-xs h-7 bg-blue-900 text-white font-semibold rounded py-1 px-4 tracking-widest hover:bg-blue-500">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="white-main mt-9 flex-row h-56 justify-items-center mx-auto px-20">
                <div className="flex justify-center items-center">
                    <p className="text-4xl font-bold text-black text-center">Unlock Insights, Unleash Conversations</p>
                </div>
                <div className="mt-3 flex justify-center items-center">
                    <div className="w-[400px]">
                        <p className="text-base text-black text-center">DataDialogue uses state-of-the-art AI to let you chat with your database like you do with teammates.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="signup">
                        <button className="mt-6 text-base h-10 bg-blue-900 text-white font-semibold rounded py-2 px-4 hover:bg-blue-500">
                            Start chatting with your data
                        </button>
                    </Link>
                </div>
            </div>

            <div className="blue-main h-[700px] bg-blue-300 mx-auto px-20 py-8">
                <div className="mt-3 flex justify-center items-center">
                    <div className="h-6 w-52 rounded-full bg-white flex justify-center items-center border-[1.5px] border-blue-500">
                        <p className="text-xs font-semibold text-blue-500 text-center">INSIGHT MADE EFFORTLESS</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <p className="text-3xl font-bold text-white text-center">Your personal data aide</p>
                </div>
                <div className="mt-1 flex justify-center items-center">
                    <div className="w-96">
                        <p className="text-base text-white text-center">Whether you seek the latest Pro Plan subscriber or any other information, DataDialogue has you covered</p>
                    </div>
                </div>
                <div className="mt-16 flex justify-center items-center">
                    {/* <div className="w-1/2 h-72 ml-16 mr-20 rounded-lg border border-black bg-white">

                    </div>
                    <div className="w-1/2 h-72 mr-16 rounded-lg border border-black bg-white">

                    </div> */}
                    <div className="container px-4 lg:px-40 flex flex-col lg:flex-row justify-center lg:justify-between gap-4 lg:gap-0">
                        <div className="w-full lg:w-1/2 bg-white mb-4 lg:mb-0 mr-8 text-black rounded-md">
                            <div className="px-7 py-10">
                                <div className="w-full h-full">
                                    <img src="search.svg" className="w-20 h-20"></img>
                                </div>
                                <div className="text-2xl font-bold mt-5">
                                    Query your data
                                </div>
                                <div className="text-base mt-3">
                                    Need to know the email of the last five clients that signed up to your product? We got you!
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 bg-white text-black rounded-md">
                            <div className="px-7 py-10">
                                <div className="w-full h-full">
                                    <img src="access-control.svg" className="w-20 h-20"></img>
                                </div>
                                <div className="text-2xl font-bold mt-5">
                                    Access Control
                                </div>
                                <div className="text-base mt-3">
                                    Concerned about the security of your data? We've got you covered with our access control feature!
                                </div>
                            </div>
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