
import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";
import ResumeInput from "../../../components/ResumeInput";
import ResumeResponse from "../../../components/ResumeResponse";
import Suggestions from "../../../components/Suggestions";

  type Props = {
    params: {
      id: string
    }
  }

 function ChatPage({ params: { id } }: Props) {
  return <div className="flex flex-col h-screen overflow-hidden">

    <ResumeInput />

    <ResumeResponse />

    <Suggestions />

    <Chat chatId = {id} />
    <ChatInput chatId = {id} />

  </div>
}

export default ChatPage;