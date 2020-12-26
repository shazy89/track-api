const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
      latitude: Number,
      longitude: Number,
      altitude: Number,
      accuracy: Number,
      heading: Number,
      speed: Number
    }
  });
const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // This is how we indicate that user id is reference to some other id stored in monog db
        ref: 'User' // this is how mongoose will understand that user_id is poingint any instance of USER<<< ref: 'User"   >>>
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})

mongoose.model('Track', trackSchema)