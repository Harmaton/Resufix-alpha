'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { db } from '../firebase';

type Props = {
    chatId: string
}

export default function ChatInput({chatId}: Props) {

  const [prompt ,setPrompt] = useState("");
  const {data: session} = useSession();

  const model = 'text-davinci-003';

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt(input);

    const message :Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || 'https://ui-avatars.com/api/?name${session?.user?.name!}',
      }
    };

    await addDoc(collection(db,
       'users', 
       session?.user?.email!,
        'chats', 
        chatId,
       'messages'), 
       message);

       const notification = toast.loading('Resufix loading ...');

    //Toast Notification
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
         chatId, 
         model,
        session
    }),
  }).then( () => {
    toast.success('Resufix has responded!', 
  {
    id: notification,
  })
}
)}
  
  return (
    <div className='bg-black '>
        <form 
        onSubmit={sendMessage}
        className="flex m-5"> 

            <input value ={prompt}
            onChange={(e) => setPrompt(e.target.value)}
             className="flex-1 outline-none rounded-full h-12
             bg-gray-50 px-5" 
             type="text"
             disabled={!session}
              placeholder= " any question about your resume?"
              
              />
              <button type='submit'
              disabled={!prompt || !session}
              className="ml-4 bg-blue-500 
              rounded-full
              font-bold h-12 w-12 flex items-center 
              justify-center text-white
              hover:bg-transparent hover:text-blue-500
              disabled:cursor-not-allowed
              disabled:bg-gray-500
              animate-pulse
              disabled:animate-none
              ">

                <PaperAirplaneIcon className='h-4 w-4 -rotate-45 m' />
                </button>
        </form>

    </div>
  );
}

