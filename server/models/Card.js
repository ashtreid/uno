const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    color: {
        type: String,
        enum: ['red', 'green', 'blue', 'yellow'], 
        required: true,
    },
    value: {
        type: String,
        enum: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'skip', 'reverse', 'drawTwo', 'wild', 'wildDrawFour'], 
        required: true,
    },
});

const Card = model('Card', cardSchema);

module.exports = Card;
