const express = require('express');

const router = express.Router();

// view articles
router.get('/articles', (req, res) => {
  const articles = [
    {
      Tittle: 'Article One',
      CreatedAt: new Date(),
      Description: 'Lorem ipsum article',
    },
    {
      Tittle: 'Article Two',
      CreatedAt: new Date(),
      Description: 'Lorem ipsum article',
    },
  ];
  res.render('../views/articles/index', { articles: articles });
});

// go to new page mock
router.get('/articles/new', (req, res) => {
  res.render('articles/newArticle');
});

router.get('/articles/update', (req, res) => {
  res.render('articles/editArticle');
});

router.get('/articles/remove', (req, res) => {
  res.send('articles has been deleted');
});

// ACTUAL ROUTES

// add new article
router.post('/articles/new', (req, res) => {
  res.render('articles');
});

// edit new article
router.put('/articles/update', (req, res) => {
  res.render('articles');
});

module.exports = router;
