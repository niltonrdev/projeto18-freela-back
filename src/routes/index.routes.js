import { Router } from "express";
import authRouter from "./auth.routes.js";
import postsRouter from "./posts.routes.js";



const router = Router()

router.use(authRouter)
router.use(postsRouter)

export default router;