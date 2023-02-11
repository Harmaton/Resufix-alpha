'use client'

import { signOut, useSession } from 'next-auth/react'
import NewChat from './NewChat'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../firebase'
import ChatRow from './ChatRow'


function SideBar () {

    const {data: session} = useSession()

    const [chats, loading, error] = useCollection(
        session  && collection(db, 'users', session?.user?.email!, 'chats')
    )
  
  return (
    <div className='p-2 flex flex-col h-screen'>
    <div className='flex-1'>
    <div>
       <NewChat />

    <div>{/* Model Selection*/}</div>

    {/* Map Through ChatRows*/}
    {chats?.docs.map(
        chat => (
            <ChatRow key={chat.id} id={chat.id} />
            )
    )}
    </div>

    </div>

    {session && (

        <img onClick={() => signOut()}
        className='rounded-full cursor-pointer h-10 w-10 ml-2 mx-auto mb-2 hover:opacity-25' 
        src={session?.user?.image} alt='' />

    )}
    
    </div>
  )
}

export default SideBar