var express = require("express");
var router = express.Router();

const myDB = require("../db/myMongoDB.js");

router.get("/cgi", (req, res) => {
  const name = "John";

  const time = new Date();
  res.send(`Hola ${name}!!!!!
    <br/>
    the date is ${time.toLocaleTimeString()}`);
});

/* GET home page. */
router.get("/posts", async (req, res, next) => {
  const posts = await myDB.getPosts();
  res.json(posts);
});

router.post("/posts/create", async (req, res) => {
  const post = req.body;

  console.log("post", post);

  await myDB.createPost(post);

  res.status(200).send({ inserted: true });

  // res.redirect("/");
});

router.get("/initialize", async (req, res) => {
  await myDB.initialize();

  res.redirect("/");
});

module.exports = router;
