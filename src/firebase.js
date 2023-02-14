require('dotenv').config()
const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
})

const { getFirestore } = require('firebase-admin/firestore')
const db = getFirestore()
module.exports = {
  db
}