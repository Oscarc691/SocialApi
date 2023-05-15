const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/],
      required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual('postCount').get(function () {
  return this.posts.length;
}
);

UserSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
}
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
}
);

const User = model('User', UserSchema);

module.exports = User;