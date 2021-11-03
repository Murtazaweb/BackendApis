const express = require("express");
const app = express();
const dotenv = require("dotenv");
app.use(express.json());
const userRouter = require("./router/userAuth");
app.use(userRouter);
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`connection is live at port no ${PORT}`);
});
