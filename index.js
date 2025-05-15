const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// medle ware
app.use(cors());
app.use(express.json())

const users = [
  { id: 1, name: "akash", email: "akash@gmail.com" },
  { id: 2, name: "fahim", email: "fahim@gmail.com" },
  { id: 3, name: "alif", email: "alif@gmail.com" },
  { id: 4, name: " nisat", email: "nisat@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (rec, res) => {
  res.send(users);
});

app.post("/users", (rec, res) =>{
  console.log("post api hitting")
  console.log(rec.body)
  const newUsers = rec.body;
  newUsers.id = users.length + 1;
  users.push(newUsers);
  res.send(newUsers)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
