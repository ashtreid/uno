const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  drawPile: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Card',
    }
  ],
  discardPile: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Card',
    }
  ],
  currentPlayer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  gameState: {
    type: String,
    enum: ['waiting', 'in-progress', 'completed'],
    default: 'waiting',
  },
  direction: {
    type: String,
    enum: ['clockwise', 'counterclockwise'],
    default: 'clockwise',
  },
});

const Game = model('Game', gameSchema);

module.exports = Game;
