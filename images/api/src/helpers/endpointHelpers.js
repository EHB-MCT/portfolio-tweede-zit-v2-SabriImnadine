function checkPlayerDetails(player) {
  if (!player) return false;

  const requiredFields = ['first_name', 'last_name', 'age', 'nationality', 'position', 'club_id'];
  return requiredFields.every(field => player[field] !== undefined && player[field] !== null && player[field] !== '');
}

module.exports = {
  checkPlayerDetails
};

  