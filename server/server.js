const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const routes = require("./routes/index");

app.use(express.json());
app.use(cors());
routes(app);

app.listen(PORT, () => console.log("listening on port " + PORT));
