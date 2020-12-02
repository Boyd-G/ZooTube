import * as express from 'express';
import streamsRouter from "./streams";

const router = express.Router();

router.use('/streams', streamsRouter);

export default router;