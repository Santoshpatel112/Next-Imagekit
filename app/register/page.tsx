'use client'
import React from "react"
import {useState } from "react";
import {useRouter} from 'next/navigation';
import { PassThrough } from "stream";
export default function RegisterPage(){
    const [email ,setEmail]=useState('');
    const [password ,setPassword]=useState('');
    const [confirmPassword ,setConfirmPassword]=useState('');
    const router=useRouter();


    const handleSubmit=async (e:React.FocusEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(password !==confirmPassword){
            console.log("Passwords do not match");
            alert("Passwords do not match");
            return;
        }
        try {
            // react query or fetch api to call the register api
            //loading err data
            const res=await fetch('/api/auth/register',{
                method:'POST',
                headers:{'Content-Type':'application/json'},// Set the content type to JSON
                body:JSON.stringify({email,password}), // Send only email and password
            })
            const data=await res.json();
            if(res.ok){
                console.log("User registered successfully",data);
                alert("User registered successfully");
                router.push('/login'); // Redirect to login page after successful registration
            }else{
                console.log("Registration failed",data);
                alert(`Registration failed: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.log("An error occurred during registration",error);
            alert("An error occurred during registration");

        }
    }
     return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="" />
                <input type="password" placeholder="password" value={password} onChange={(e)=>e.target.value} id="" />
                <input type="password" placeholder="confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} id="" />
                <button type="submit">Register</button>

            </form>
            <div>
               <p> Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    )

}
   
