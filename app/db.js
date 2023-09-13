const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://bhartiupkar6:upkar6@cluster0.mhmtj8w.mongodb.net/cv-upload?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then((e)=>console.log("Hi upkar connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Hi upkar not connect Mongodb", e));
}
