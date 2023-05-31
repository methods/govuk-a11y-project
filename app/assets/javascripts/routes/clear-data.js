//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

function clearData(req, res) {
  req.session.data = {
    name: req.session.data['name'],
    surname: req.session.data['surname'],
    age: req.session.data.age,
  };
  res.redirect("/rules");
}

module.exports = clearData;
