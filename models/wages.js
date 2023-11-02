const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const wageSchema = new Schema({
    reason: {
        type: String,
       required: true,
    },
    money: {
        type: String,
       required: true,
    },
    balance: {
        type: String,
       required: true,
    },
    balanced: {
        type: String,
       required: true,
    },
    balanced: {
        type: String,
       required: true,
    }

}, { timestamps : true });
const Wagecalculation = mongoose.model('Wages', wageSchema);
module.exports = Wagecalculation;