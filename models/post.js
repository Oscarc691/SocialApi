const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;
const ReactionSchema = require('./reaction');

const PostSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reactions: [ReactionSchema],
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}
);

PostSchema.virtual('getReactions').get(function() {
  return this.reactions.length;
}
);

const Post = model('Post', PostSchema);

module.exports = Post;
