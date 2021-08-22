const functions = require('firebase-functions')
const unauthenticated = require('./app/route/unauthenticated')
const authenticated = require('./app/route/authenticated')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express')
const cors = require('cors')

const app = express()

// Automatically allow cross-origin requests
app.use(cors({origin: true}))

// Add middleware to authenticate requests
app.use(unauthenticated)
app.use(authenticated)

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app)
