/************* global init ***************/
const port = 3000
const express = require('express')
const { fstat } = require('fs')
const app = express()
const path = require('path')

// console.log(path.join(...인자)) // join()은 상대경로, 절대경로
console.log( __dirname ) // C:\Users\mmadu\Documents\정상용_수업\14.ejs
console.log( __filename ) // C:\Users\mmadu\Documents\정상용_수업\14.ejs\06.path.js
console.log(path.join(__dirname, 'public')) // D:\booldook

app.use('/', express.static(path.join(__dirname, 'public')))

/************* server function *************/
app.listen(port, () => {console.log('http://127.0.0.1:'+port)})