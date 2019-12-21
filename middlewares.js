import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Hyeonjin Kim";
  res.locals.routes = routes;
  next();
};
