const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/onlineNotes";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to our mongo");
    })
}

module.exports = connectToMongo