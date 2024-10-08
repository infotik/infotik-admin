'use client';

import { isExist } from '@/http';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
  const [link, setLink] = useState('');
  const router = useRouter();
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    if (!link) {
      setMessage("Please Enter Link");
      return;
    }
    setMessage("");
    const uid = link.split('/')[link.split('/').length - 1];
    const res = await isExist(uid);
    if (res) {
      router.push(`/dashboard/posts/${uid}`);
    } else {
      setMessage("No Post Found");
    }
  };

  return (
    <section className='h-full relative px-4'>
      <div className='py-3 border-t border-b border-white text-center mb-5'>
        <h2 className='text-2xl text-white'>Search Video</h2>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-row items-center border border-secondary rounded-md bg-primary'>
          <Image src='/white-search.png' alt='Search Icon' width={20} height={20} className='object-contain p-2' />
          <input
            type='text'
            className='text-white w-full bg-transparent outline-none border-none px-2 py-2'
            placeholder='Paste video share link'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button
          className='py-2 px-4 rounded-md border border-secondary text-secondary mx-auto block mt-4'
          onClick={handleSearch}
        >
          Search
        </button>
        {message && <p className='text-white mt-4 text-center'>{message}</p>}
      </div>
    </section>
  );
};

export default Page;
