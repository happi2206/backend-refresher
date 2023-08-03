const express = require('express');
const {
  registerUser,
  currentUser,
  loginUser,
} = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome' });
});
router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currentUser);

module.exports = router;
