const router = require('express').Router();
const sequelize = require('../config/connection');
const { Board, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Board.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      // 'board_content',
      'title',
      'description',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBoardData => {
      // serialize data before passing to template
      const boards = dbBoardData.map(board => board.get({ plain: true }));
      res.render('profile', { boards, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
  Board.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      // 'board_content',
      'title',
      'description',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBoardData => {
      // serialize data before passing to template
      const board = dbBoardData.get({ plain: true });
      res.render('edit-board', { board, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
