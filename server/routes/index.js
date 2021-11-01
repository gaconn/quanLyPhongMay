const userRouter = require("./accounts");
function routes(app) {
    app.use("/users", userRouter);
}

module.exports = routes;
