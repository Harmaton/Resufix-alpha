import admin from 'firebase-admin';
import { getApps } from 'firebase/app';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string);

if(!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    })
}

const adminDb = admin.firestore();

export default  {adminDb} ;
