function checkPlayerName(name) {
  const MAX_LENGTH = 40;
  return typeof name === 'string' && name.trim().length > 0 && name.length <= MAX_LENGTH;
}

module.exports = {
  checkPlayerName
};

  