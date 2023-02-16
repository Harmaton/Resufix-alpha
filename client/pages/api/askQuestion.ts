import type { NextApiRequest, NextApiResponse } from 'next'
import adminDb from '../../firedaseAdmin';
import admin from 'firebase-admin';
import query from '../../lib/queryApi';


type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const {prompt, chatId, model, session} = req.body;

    if(!prompt || !chatId ) {
        res.status(400).json({ answer: 'Bad Request' })
        return;
    }


    //Chat GPT query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || 'ResuFix was unable to find an answer for that!',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://resufix.com/static/media/chatgpt.2b5b5b5e.png"

        }

    };

    await adminDb.collection("chats").doc(chatId).collection("messages").add(message);
    collection("users").
    doc(session?.user.email).collection("chats")
    .doc(chatId).collection("messages").add(message);

  res.status(200).json({ answer: message.text });
}
