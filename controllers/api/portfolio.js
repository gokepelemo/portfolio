const Portfolio = require("../../models/api/portfolio");

async function index(req, res) {
  try {
    const portfolio = await Portfolio.find({});
    res.status(200).json(portfolio);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
    index
}
