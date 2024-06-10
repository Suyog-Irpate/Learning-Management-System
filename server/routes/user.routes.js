import { Router } from "express";
import {
  getLoggedInUserDetails,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", isLoggedIn, getLoggedInUserDetails);
router.put("/update/:id", isLoggedIn, upload.single("avatar"), updateUser);

export default router;