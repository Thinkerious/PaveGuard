const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('firebase-admin/lib/credential/paveguard-3f8cb-2f0d8274b721.json');
initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();
export async function sendData(data) {
    const res = await db.collection('potholes').add(data);
}