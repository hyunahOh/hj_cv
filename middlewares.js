import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.address = "http://localhost:4000";
  res.locals.siteName = "Hyeonjin Kim";
  res.locals.area = "Seoul";
  res.locals.email = "wlskhj@icloud.com";
  res.locals.genre = "Fabric art";
  res.locals.first = "familiar, unfamiliar";
  res.locals.second = "I.L.T";
  res.locals.third = "in oneself";
  res.locals.fourth = "a questioning mind";
  res.locals.fifth = "a swell ";
  res.locals.sixth = "floating village";
  res.locals.seventh = "about incompleteness";
  res.locals.eighth = "tool kits for me";
  res.locals.ninth = "personal space";
  res.locals.tenth = "leave prints";
  res.locals.eleventh = "full bloom";
  next();
};
