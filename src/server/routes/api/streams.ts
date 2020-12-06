import * as express from 'express';

import DB from '../../db';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let streams = await DB.Streams.getAll();
        res.send(streams);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let stream = await DB.Streams.getSingleStream(id);
        res.send(stream);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

export default router;