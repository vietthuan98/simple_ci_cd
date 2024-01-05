// Load the necessary modules and define a port
import express from "express";
import router from './router.js';

const app = express();

app.get("/", (_, res) => {
  res.status(200).send(`Server up and running`);
});

app.get("/ping", (_, res) => {
  res.status(200).send(`pong`);
});

app.use('/api', router);

export default app;