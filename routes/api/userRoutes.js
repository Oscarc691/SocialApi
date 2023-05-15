const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getUserById).post(createUser).put(updateUser).delete(deleteUser);

// api/users/:id/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;