const router = require('express').Router();
const validator = require('validator');
const { celebrate, Joi } = require('celebrate')

const {
  getUsers,
  getUsersById,
  updateProfile,
  updateAvatar,
  getUserInfo,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/id/:id', getUsersById);
router.get('/me', getUserInfo);
router.patch('/me', updateProfile);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().custom((value, helpers) => {
      if (!validator.isURL(value)) {
        return helpers.error('string.uri');
      }
      return value;
    }),
  }),
}) ,updateAvatar);

module.exports = router;
