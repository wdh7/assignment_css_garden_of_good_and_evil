const router = require('express').Router();
const { getColor } = require('../helpers/colors.js');
const data = require('../models/data.js');

router.get('/', (req, res) => {
  let { side, favFood, colorSelection, slider } = req.cookies.customize || {};
  if (!side) side = 'good';
  if (!favFood) favFood = 'Pizza';
  if (!colorSelection) colorSelection = 'white';
  if (!slider) slider = 2;

  const { good, evil } = data;

  let isGood;
  if (side === 'good') {
    isGood = true;
  } else {
    isGood = false;
  }

  res.render('index', {
    side: side[0].toUpperCase() + side.slice(1),
    favFood,
    colorSelection: getColor(colorSelection),
    slider,
    isGood,
    good,
    evil
  });
});



module.exports = router;
