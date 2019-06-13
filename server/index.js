require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING}= process.env
const app = express()

app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie:{
            maxAge: 1000 *60 *60 * 24 * 7
        }
    })
)

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db)
    console.log('Database Connected (^_^)')
})
app.listen(SERVER_PORT, () => {
    console.log(`Listening to port ${SERVER_PORT}`)
})