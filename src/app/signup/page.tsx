"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";


export default function SignupPage(){
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    const onSignup = async () => {

    }

    return(
        // <div>
        //     <h1>Signup</h1>
        //     <hr/>
        //     <label htmlFor="name">name</label>
        //     <input 
        //         id="name" 
        //         type="text" 
        //         value={user.name}
        //         onChange={(e) => setUser({...user, name: e.target.value})} 
        //         placeholder="name"
        //         />
        //     <label htmlFor="email">email</label>
        //     <input 
        //         id="email"
        //         type="text" 
        //         value={user.email}
        //         onChange={(e) => setUser({...user, email: e.target.value})} 
        //         placeholder="email"
        //         />
        //     <label htmlFor="password">password</label>
        //     <input 
        //         id="password" 
        //         type="password" 
        //         value={user.password}
        //         onChange={(e) => setUser({...user, password: e.target.value})} 
        //         placeholder="password"
        //         />
        //     <button 
        //     onClick={onSignup}>
        //         Signup here
        //     </button>
        // </div>
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="flex-row  w-[400px]">
                <div className="text-center text-2xl font-bold text-blue-900"><h2>DataDialogue</h2></div>
                <div className="text-center text-4xl p-2 font-bold text-black"><h1>Welcome!</h1></div>
                <div className="p-1">
                    <div>
                        <label htmlFor="name" className="font-medium text-black">Name</label>
                    </div>
                    <div>
                        <input className="w-full rounded-sm h-8 border border-gray-400 text-black"
                            id="name" 
                            type="text" 
                            value={user.name}
                            onChange={(e) => setUser({...user, name: e.target.value})}/>
                    </div>
                </div>
                <div className="p-1">
                    <div>
                        <label htmlFor="email" className="font-medium text-black">Email</label>
                    </div>
                    <div>
                        <input className="w-full rounded-sm h-8 border border-gray-400 text-black"
                            id="email" 
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}/>
                    </div>
                </div>
                <div className="p-1">
                    <div>
                        <label htmlFor="password" className="font-medium text-black">Password</label>
                    </div>
                    <div>
                        <input className="w-full rounded-sm h-8 border border-gray-400 text-black"
                            id="password" 
                            type="password" 
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </div>
                </div>
                {/* flex-col not working */}
                <div id="register" className="grid grid-cols-2 py-2 px-1"> 
                    <div className="place-self-start">
                        <p className="text-blue-500 my-2 hover:text-blue-300">
                            <Link href="/login">Already have an account?</Link>
                        </p>
                    </div>
                    <div className="place-self-end">
                        <button onClick={onSignup} className="my-1 bg-blue-200 text-blue-500 font-semibold rounded py-1 px-2 hover tracking-widest hover:bg-blue-500 hover:text-blue-200">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}