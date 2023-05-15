const router = require('express').Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addReaction,
  deleteReaction,
} = require('../../controllers/postController');

// /api/thoughts
router.route('/').get(getPosts).post(createPost);

// /api/thoughts/:id
router.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

// /api/thoughts/:id/reactions
router.route('/:id/reactions').post(addReaction);

// /api/thoughts/:id/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;