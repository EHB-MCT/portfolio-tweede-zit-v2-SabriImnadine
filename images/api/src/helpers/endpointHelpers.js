function checkPlayerName(name) {
    return typeof name === 'string' && name.trim().length > 0;
  }
  
  module.exports = {
    checkPlayerName
  };
  