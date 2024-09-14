import { Router } from "express";
import {
  basic,
  getAllnews,
  search,
  searchE,
  searchS,
  searchT,
  searchW,
  topNews,
} from "../controllers/user.controller.js";
const router = Router();
router.route("/").get(basic);
router.route("/news").get(getAllnews);
router.route("/search").get(search);
router.route("/top-news").get(topNews);
router.route("/search-world").get(searchW);
router.route("/search-technology").get(searchT);
router.route("/search-sports").get(searchS);
router.route("/search-entertainment").get(searchE);
export default router;
// router.route("")
