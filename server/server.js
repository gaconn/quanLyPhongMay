const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/index");
app.use(express.json());
routes(app);

app.listen(PORT, () => console.log("listening on port " + PORT));
