//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

function clearData(req, res) {
  req.session.data = {};
  res.redirect("/rules");
}

module.exports = clearData;
