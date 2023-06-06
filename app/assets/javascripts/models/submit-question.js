function checkAnswer(req, res, name, correctOption, page) {
  const selectedOptions = req.session.data[`${name}`];

  // Convert to JSON strings for comparison
  const selectedOptionsStr = JSON.stringify(selectedOptions);
  const correctOptionsStr = JSON.stringify(correctOption);

  if (selectedOptionsStr === correctOptionsStr) {
    res.redirect(page);
  } else {
    res.redirect("/game-over");
  }
}

module.exports = checkAnswer;
