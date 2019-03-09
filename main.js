const app = require("./lib/app")


//ROUTES
app.use("/", require("./routers/Index"));
