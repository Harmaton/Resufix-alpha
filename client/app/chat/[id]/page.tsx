'use client'

import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";
import FileInput from "../../../components/FileInput";
import ResumeDetails from "../../../components/ResumeDetails";
import Suggestions from "../../../components/Suggestions";

  type Props = {
    params: {
      id: string
    }
  }

 function ChatPage({ params: { id } }: Props) {
  return <div className="flex flex-col h-screen overflow-hidden">

    <FileInput />

    <ResumeDetails cvData={undefined} />

    <Suggestions />

    <Chat chatId = {id} />
    <ChatInput chatId = {id} />

  </div>
}

export default ChatPage;