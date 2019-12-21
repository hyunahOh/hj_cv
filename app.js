import express from "express";
import routes from "./routes";
import router from "./router/router";
import path from "path";
import { localMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(localMiddleware);

app.use(routes.home, router);

export default app;
