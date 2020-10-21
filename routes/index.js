var express = require("express");
var router = express.Router();

const posts = [
  {
    text: "l;kjasd;lfkjas;dlkfja;sldkfj;alskdjf ;alksdj f",
    author: "John",
    createdAt: new Date(),
  },

  {
    text: "l;kjasd;lfkjas;dlkfja;sldkfj;alskdjf ;alksdj f",
    author: "John1",
    createdAt: new Date(),
  },
  {
    text: "l;kjasd;lfkjas;dlkfja;sldkfj;alskdjf ;alksdj f",
    author: "John2",
    createdAt: new Date(),
  },
  {
    text: "l;kjasd;lfkjas;dlkfja;sldkfj;alskdjf ;alksdj f",
    author: "John3",
    createdAt: new Date(),
  },
];

router.get("/cgi", (req, res) => {
  const name = "John";

  const time = new Date();
  res.send(`Hola ${name}!!!!!
    <br/>
    the date is ${time.toLocaleTimeString()}`);
});

/* GET home page. */
router.get("/posts", function (req, res, next) {
  res.json(posts);
});

module.exports = router;
