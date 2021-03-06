const Posts = require("../models/Post");

async function index(req, res) {
  try {
    const post = await Posts.all;
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function show(req, res) {
  try {
    const post = await Posts.findById(parseInt(req.params.id));
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ err });
  }
}
async function create(req, res) {
  try {
    const post = await Posts.create(req.body);
    res.status(200).json(post);
  } catch (err) {
    res.status(422).json({ err });
  }
}
module.exports = { index, show, create };
