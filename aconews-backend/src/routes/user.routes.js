import { Router } from "express";
import { basic, getAllnews, search } from "../controllers/user.controller.js";
const router = Router();
router.route("/").get(basic);
router.route("/news").get(getAllnews);
router.route("/search").get(search);
export default router;
// router.route("")
