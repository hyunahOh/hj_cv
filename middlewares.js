import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.address = "http://localhost:4000";
  res.locals.siteName = "Hyeonjin Kim";
  res.locals.area = "Seoul";
  res.locals.email = "wlskhj@icloud.com";
  res.locals.genre = "Fabric Art";
  res.locals.first = "Familiar, Unfamiliar";
  res.locals.second = "I.L.T";
  res.locals.third = "In Oneself";
  res.locals.fourth = "A Questioning Mind";
  res.locals.fifth = "A Swell";
  res.locals.sixth = "Floating Village";
  res.locals.seventh = "About Incompleteness";
  res.locals.eighth = "Tool Kits For Me";
  res.locals.ninth = "Personal Space";
  res.locals.tenth = "Leave prints";
  res.locals.eleventh = "Full Bloom";
  next();
};
