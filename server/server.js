const Router = require('./router/Router')
const express = require('express')
const app = express()
const  cors = cors()
const  ConnectDb = require('./src/db/connect')

const  db = ''

ConnectDb(db)
.then(()=>{
    console.log('Database successfully connected')
    app.listen('8080',()=>{
        console.log('Application started successfully in port 8080 !!!')
    })
})
.catch((error)=>{
    console.log('db error ',error)
})
app.use(cors())
app.use()