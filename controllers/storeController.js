exports.myMiddleware = (req, res, next) => {
  req.name = 'Wes';
  res.cookie('name', 'chocolate chip', {maxAge:9999});
  if (req.name === 'Wes') {
    throw Error ('that is a stupid name')
  }
  next()
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
}
