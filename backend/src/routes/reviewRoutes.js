import { Router } from "express";
import { postReview, getHealth } from "../controllers/reviewController.js";
import { validateReviewRequest } from "../middlewares/validateRequest.js";

const router = Router();

router.get("/health", getHealth);
router.post("/review", validateReviewRequest, postReview);

export default router;
