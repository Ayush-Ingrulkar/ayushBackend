// import mongoose from"mongoose";
// import dotenv from 'dotenv';
const mongoose = require('mongoose');
 
// dotenv.config();
const DBConnection= async () =>{
    // mongoose.set('strictQuerry',true);

    try{
       const conn = await  mongoose.connect('mongodb+srv://ingrulkarayush:ayush0604@cluster0.jjrjkdb.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`DataBase Connected Successfully: ${conn.connection.host}`);
    }
    catch(error){
        console.error('Error While Connection The DataBase',error.message);
    }
    
}
module.exports= DBConnection;
