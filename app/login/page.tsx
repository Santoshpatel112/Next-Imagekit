'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const router= useRouter();
const page = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle login logic here
  const result=  await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    if(result?.error){
      console.log('Login failed:', result.error)
    }
    else{
      router.push("/");
      console.log('Login successful')
    }

    };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" name="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        </form>
        <div>
          Don t have an account? <button onClick={()=>router.push("/register")}></button>

        </div>
    </div>
  )
}
export default page
