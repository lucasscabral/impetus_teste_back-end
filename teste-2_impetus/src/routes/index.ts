import { Router } from "express";
import useRouter from "./userRouter";

const router = Router();

router.use(useRouter);

export default router;
