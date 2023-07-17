const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middlewares/errorMiddleware");
const app = express();

const routes = require("./routes/goalRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", routes);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on  ${port} port`);
});
