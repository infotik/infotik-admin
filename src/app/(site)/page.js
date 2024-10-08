"use client"
import React, { useState, useContext, useEffect } from 'react';
import { login } from '@/http';
import { Context } from '@/contextapi/ContextProvider';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { setisAuth, isAuth } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    setisAuth(res);
  };

  useEffect(() => {
    if (isAuth) {
      router.push('/dashboard');
    }
  }, [isAuth]);

  return (
    <section className='w-full h-screen pt-28 bg-primary flex justify-center items-center'>
      <div className='w-full max-w-[90%] sm:max-w-[40rem] mx-auto bg-black rounded-md p-8 sm:p-14'>
        <form onSubmit={handleSubmit}>
          <input 
            type='email' 
            className='p-2 px-3 w-full bg-primary text-white text-sm border-2 rounded-md border-secondary my-3 placeholder:text-gray-400 outline-none' 
            placeholder='Enter your email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type='password' 
            className='p-2 px-3 w-full bg-primary text-white text-sm border-2 rounded-md border-secondary my-3 placeholder:text-gray-400 outline-none' 
            placeholder='Enter your password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button 
            type='submit' 
            className='py-2 w-full my-3 text-white bg-gradient-infitik rounded-md hover:opacity-90 transition-opacity'>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
