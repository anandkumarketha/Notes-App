require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Mongodb connected sucessfully'))
    .catch((err)=> console.error('mongodb connection error',err))



const Note = mongoose.model("Note", {
    text : {type :String, required: true},
})

app.post('/notes', async (req, res)=>{
    const note = await Note.create({
        text: req.body.text,
    });
    res.json(note);
})

app.get('/notes', async (req, res)=>{
    const notes = await Note.find();
    res.json(notes);
})

app.delete('/notes/:id', async (req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Deleted"});
})


app.listen(3000, ()=>{
    console.log("Server running sucessfully");
})
