const router = require('express').Router();

router.post('/', (req, res) => {
  const { side, favFood, colorSelection, slider } = req.body;

  res.cookie('customize', {
    side,
    favFood,
    colorSelection,
    slider
  });

  res.redirect('back');
});



module.exports = router;
