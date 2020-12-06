import * as express from 'express';
import streamsRouter from "./streams";
import authRouter from './auth'

const router = express.Router();

router.use('/streams', streamsRouter);

router.use('/auth', authRouter);

export default router;