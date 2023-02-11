'use client'

import { FolderPlusIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';




function NewChat ()  {

  const router = useRouter()
  const {data: session} = useSession()

  const newResume = async() => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      messages: [],
      userId: session?.user?.email!,
      createdAt: serverTimestamp(),
  });

  router.push(`/chat/${doc.id}`);

  }

  return (
    <div onClick={newResume} className='border-gray-700 border chatRow'>  
     <FolderPlusIcon className='h-4 w-4 '/> 
    <p>Upload Resume</p>
    </div>
  )
}

export default NewChat