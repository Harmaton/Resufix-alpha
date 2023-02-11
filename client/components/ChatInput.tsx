import React from 'react';

type Props = {
    chatId: string
}

export default function ChatInput({chatId}: Props) {
  return (
    <div>
        <form className="flex"> 
            <input className="flex-1 outline-none rounded-full h-12
             bg-gray-50 px-5" 
             type="text"
              placeholder= "Do you have any question about your resume ?" />
        </form>

    </div>
  );
}

