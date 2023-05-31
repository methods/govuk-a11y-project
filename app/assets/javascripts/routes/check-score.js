//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

function checkScore(req, res) {
  console.log(req.session.data.age);
}

module.exports = checkScore;
