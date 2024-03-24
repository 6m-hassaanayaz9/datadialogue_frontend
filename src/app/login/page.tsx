"use client";
import Link from "next/link";
import React from "react";
import { useRouter} from "next/navigation";
import {axios} from "axios";
import { useState } from "react";
// import {useForm} from "react-hook-form";


export default function LoginPage(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Validate email format
    //     if (!validateEmail(email)) {
    //         setEmailError("Valid email is required");
    //         return;
    //     }
        
    //     setEmailError("");

    //     // Log the email and password
    //     console.log("Email:", email);
    //     console.log("Password:", password);
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // Validate email format
    //     if (!validateEmail(email)) {
    //         setEmailError("Valid email is required");
    //         return;
    //     }
        
    //     setEmailError("");
        
        

    //     try {
            
    //         const response = await fetch("http://127.0.0.1:8000/login/", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });
    //         const responseData = await response.json(); // Parse JSON response
    //         if (response.ok) {
    //             // Handle successful login, e.g., redirect to dashboard
    //             console.log('Login successful');
    //             return responseData;
    //         } else {
    //             // Handle login failure, e.g., display error message
    //             console.error('Login failed');
    //         }
    //     } catch (error) {
    //         console.error('Error occurred while logging in:', error);
    //     }
        
    //     // Log the email and password
    //     console.log("Email:", email);
    //     console.log("Password:", password);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate email format
        if (!validateEmail(email)) {
            setEmailError("Valid email is required");
            return;
        }
        
        setEmailError("");
         
        
        try {
            const formData = new URLSearchParams();
            formData.append('email', email);
            formData.append('password', password);
            
            const response = await fetch("http://127.0.0.1:8000/login/", {
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
                console.log('Login successful');
                return responseData;
                router.push("userDashboard"); 
            } else {
                // Handle login failure, e.g., display error message
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error occurred while logging in:', error);
        }
        
        // Log the email and password
        console.log("Email:", email);
        console.log("Password:", password);
    };
    

    const validateEmail = (email: string) => {
        
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return(    
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="flex-row w-[400px]">
                    <div><h2 className="text-center text-2xl font-bold text-blue-900">DataDialogue</h2></div>
                    <div><h1 className="text-center text-4xl p-1 font-bold text-black">Welcome Back!</h1></div>
                    <div className="p-1">
                        <div>
                            <label htmlFor="email" className="font-medium text-black">Email</label>
                        </div>
                        <div>
                        <input
                                className="w-full rounded-sm h-8 border border-gray-400 text-black"
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <p className="text-red-600">{emailError}</p>}
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
                                value={password} // Bind the value of the input field to the password state variable
                                onChange={(e) => setPassword(e.target.value)}
                                />
                        </div>
                        {/* <div>
                            <p className="font-sm text-red-600">Password is required.</p>
                        </div> */}
                    </div>
                    {/* flex-col not working */}
                    <div className="grid grid-cols-2 py-2 px-1"> 
                        <div className="place-self-start">
                            <p className="text-blue-500 my-2 hover:text-blue-300">
                                <Link href="/signup">Don't have an account?</Link>
                            </p>
                        </div>
                        <div className="place-self-end">
                            <button type="submit" className="my-1 bg-blue-200 text-blue-500 font-semibold rounded py-1 px-2 hover tracking-widest hover:bg-blue-500 hover:text-blue-200">  
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}