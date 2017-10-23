const getColor = (color) => {
  switch (color) {
    case 'red':
      color = 'rgba(234, 58, 45, 0.89)';
      break;
    case 'blue':
      color = 'rgba(33, 150, 243, 0.82)';
      break;
    case 'green':
      color = 'rgba(76, 175, 80, 0.96)';
      break;
    case 'white':
      color: '#fff';
      break;
  }

  return color;
};


module.exports = {
  getColor
};
