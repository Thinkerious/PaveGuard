const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('./paveguard-3f8cb-2f0d8274b721.json');
initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();
const port = 5173;
const host = 'http://localhost:';
const express = require('express');
const app = express();
app.listen(port, host, () => {
  console.log(`Server is running on ${host + port}`);
});

app.post('/sendData', (req,res) => {
  console.log("posted");
  const result = sendData(req.body);
  res.json({result});
});
async function sendData(data) {
  await db.collection('potholes').add(data);
  return data;
}
