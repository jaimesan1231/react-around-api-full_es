const router = require('express').Router();

const {
  getCards,
  postCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', postCard);
router.delete('/:cardId', deleteCard);
router.put('/likes/:cardId', putLike);
router.delete('/likes/:cardId', deleteLike);

module.exports = router;
