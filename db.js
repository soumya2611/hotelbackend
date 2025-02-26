import mongoose from "mongoose";
// define connection url
const URL = "mongodb://localhost:27017/backhotel";

//set up MONGODB connection 
mongoose.connect(URL)

//Get the default Connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to MONGODB LOCAL server')
})

db.on('error', (err) => {
    console.log('error connecting to DB',err)
})

db.on('disconnected', () => {
    console.log('connection to MOngoDb server is disconnected')
})

export default  db;