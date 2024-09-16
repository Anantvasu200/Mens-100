const express = require("express");
const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    matches: {
        type: Number,
        required: true,
        default: 0
    },
    sports:{
        type:[String],
        required: true
    },
    records: {
        type: [String],
        default: []
    },
});

const Player = new mongoose.model("Players", playerSchema);
module.exports = Player;