import { Router } from "express";
import useRouter from "./userRouter";
import postRouter from "./postRouter";

const router = Router();

router.use(useRouter);
router.use(postRouter);

export default router;
