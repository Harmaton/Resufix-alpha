import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData
}

export default function Message({message}: Props) {

    const isChatGpt = message.user.name === "ChatGPT";

  return (
    <>
    <div className={`py-5 text-white ${isChatGpt && 'bg-gray-300'}`}>
    <div className=" flex space-x-4 px-5 max-w-2xl mx-auto">
        <img src={message.user.avatar}  alt="" className="h-8 w-8 rounded-full"/>
        <p className="pt-1 text-sm">
            {message.text}
        </p>
         </div>
    </div>
    </>
  );
}
