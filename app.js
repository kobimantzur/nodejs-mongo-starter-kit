import express from 'express';
import {initMiddlewares} from './server/middlewares';
import { getSecret } from './server/config/index';
//init constants
const port = process.env.port || 2000;

const app = express();

// using middlewares
initMiddlewares(app);

// Configs
require("./server/config/dbConfig")(app);
app.set("superSecret", getSecret());

app.use("/", require("./server/controllers/routes"));

const server = require("http").Server(app);
server.listen(process.env.PORT || 2000, () => {
  console.log(`listening in port ${port}`);
  console.log("API is alive");
});

export default app;
