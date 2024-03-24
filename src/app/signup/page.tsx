"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";
import { useState } from "react";

export default function SignupPage(){
    
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [emailError, setEmailError] = useState("");    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        };
    const handleNameChange = (e) => {
            setName(e.target.value);
        };
    const validateEmail = (email: string) => {
        
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };
    const onSignup = async (e) => {
        e.preventDefault();
        // Validate email format
        if (!validateEmail(email)) {
            setEmailError("Valid email is required");
            return;
        }
        
        setEmailError("");
        try {
            const formData:BodyInit = new URLSearchParams();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('name', name);
            const response = await fetch("http://127.0.0.1:8000/signup/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });
            const responseData = await response.json(); // Parse JSON response
            console.log(responseData);
            if (response.ok) {
                // Handle successful login, e.g., redirect to dashboard
                console.log('User Created Successfully!');
                router.push("login"); 
                return responseData;
                
            } else {
                // Handle login failure, e.g., display error message
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error occurred while registering:', error);
        }
        
        // Log the email and password
        console.log("Email:", email);
        console.log("Password:", password);

    };

    return(
       
        <form onSubmit={onSignup}>    
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
                                name="name"
                                value={name}
                                onChange={handleNameChange} 
                                

                                />
                        </div>
                    </div>
                    <div className="p-1">
                        <div>
                            <label htmlFor="email" className="font-medium text-black">Email</label>
                        </div>
                        <div>
                            <input className="w-full rounded-sm h-8 border border-gray-400 text-black"
                                id="email" 
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                />
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
                                name="password"
                                value={password}
                                onChange={handlePasswordChange} 
                                
                                />
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
                            <button type="submit" className="my-1 bg-blue-200 text-blue-500 font-semibold rounded py-1 px-2 hover tracking-widest hover:bg-blue-500 hover:text-blue-200">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>    

    )
}