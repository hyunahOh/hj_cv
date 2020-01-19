import express from "express";
import routes from "../routes";
import {
  home,
  contact,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh
} from "../controllers/controller";

const router = express.Router();

router.get(routes.home, home);
router.get(routes.contact, contact);
router.get(routes.first, first);
router.get(routes.second, second);
router.get(routes.third, third);
router.get(routes.fourth, fourth);
router.get(routes.fifth, fifth);
router.get(routes.sixth, sixth);
router.get(routes.seventh, seventh);
router.get(routes.eighth, eighth);
router.get(routes.ninth, ninth);
router.get(routes.tenth, tenth);
router.get(routes.eleventh, eleventh);

export default router;
