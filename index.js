const express = require("express");
const server = express();
const api = require("./api");

server.use(express.json());

server.listen(3000);

server.get("/", (req, res) => {
  return res.send({ message: "Joyce kelly" });
});

server.get("/pokemon/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const { data } = await api.get(`pokemon/${id}`);
    return res.send({ name: data.name });
  } catch (error) {
    res.send({ error: error.message });
  }
});
