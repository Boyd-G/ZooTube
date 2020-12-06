import * as express from 'express';
import * as passport from 'passport';

import streamsRouter from './streams'

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/streams', streamsRouter);

export default router;