const { Router } = require("express");
const fs = require("fs");

const router = Router();

/* router.get('/date', (req, res) => {
    res.send(new Date(Date.now()))
}) */

router.get("/date", (req, res) => {
  const date = new Date();
  res.send(
    `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
});
router.post("/greeting", (req, res) => {
  if (req.body.name !== "") {
      res.send(`Buen día ${req.body.name}`);
  } else {
      res.send("Please enter a name!")
  }
}); 

router.get("/text", (req, res) => {
  fs.readFile("text.txt", "utf8", (err, data) => {
    res.send(data);
  });
});

module.exports = router;
