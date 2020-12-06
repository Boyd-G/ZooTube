import * as express from 'express';
import streamsRouter from "./streams";
import authRouter from './auth'
import apiRouter from './api';

const router = express.Router();

router.use('/streams', streamsRouter);

router.use('/auth', authRouter);

router.use('/api', apiRouter);

export default router;