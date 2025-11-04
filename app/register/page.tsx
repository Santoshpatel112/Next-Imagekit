'use client'
import React from "react"
import { useState } from "react";
export default function RegisterPage(){
    const [email ,setEmail]=useState('');
    const [password ,setPassword]=useState('');
    const [confirmPassword ,setConfirmPassword]=useState('');
    return(
        <div>
            <h1>Register Page</h1>
        </div>
    )
}