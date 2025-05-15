const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PROT || 5000;

// medle ware
app.use(cors());

const users = [
  { name: "akash", email: "akash@gmail.com" },
  { name: "fahim", email: "fahim@gmail.com" },
  { name: "alif", email: "alif@gmail.com" },
  { name: " nisat", email: "nisat@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (rec, res) =>{
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
