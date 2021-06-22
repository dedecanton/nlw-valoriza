//CODES
// code lesson 1: #together

import "reflect-metadata";
import express from 'express';
import './database'

const app = express();

app.get('/test', (req,res)=> {
   return res.send('Olá nlw')
})

app.post('/test-post', (req,res)=> {
    return res.send('Olá nlw método post')
})

app.listen(3000, ()=> console.log('Server is running'))

