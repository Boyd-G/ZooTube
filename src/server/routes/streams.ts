import * as express from 'express';
import DB from "../db"
import { OkPacket } from "mysql"
const router = express.Router();

// router.get('/home', (req, res, next) => {
//     res.json('World');
// });

router.get('/all', async (req, res) => {
    try {
    let streams = await DB.Streams.all()
    res.json(streams)
    } catch(e) {
        res.sendStatus(500)
    }
});
router.get('/all/:id', async (req, res) => {
    try {
    const id: number = Number(req.params.id);    
    let stream = await DB.Streams.singleStream(id)
    res.json(stream)
    } catch(e) {
        res.sendStatus(500)
    }
});
router.get('/organizations', async (req, res) => {
    try {
    const streams = await DB.Streams.allOrganizations();
    res.json(streams)
    } catch(e) {
        res.sendStatus(500).send(e)
    }
})

// router.get('/organizations', async (req, res) => {
        
//     try {    
//     // let organization = await DB.Streams.allOrganizations()
//     res.json(await DB.Streams.all())
//     } catch(error) {
//         console.log(error)
//         res.send(error).status(500)
//     }
// });

router.get('/organizations/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        let singleOrgType = await DB.Streams.singleOrganization(id)
        res.json(singleOrgType)
        } catch(e) {
            res.send(e).status(500)
        }
    })

router.get('/animals', async (req, res) => {
    try {
    let animals = await DB.Streams.allAnimals()
    res.json(animals)
    } catch(e) {
        res.sendStatus(500)
    }
})
router.get('/animals/:id', async (req, res) => {
    try {
    const id = Number(req.params.id);
    let oneAnimal = await DB.Streams.singleAnimal(id)
    res.json(oneAnimal)
    } catch(e) {
        res.sendStatus(500)
    }
})
router.get('/organizationtypes', async (req, res) => {
    try {
    let organizationtypes = await DB.Streams.allOrganizationTypes()
    res.json(organizationtypes)
    } catch(e) {
        res.sendStatus(500)
    }
})
router.get('/organizationtypes/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
    let singleOrgType = await DB.Streams.singleOrganizationType(id)
    res.json(singleOrgType)
    } catch(e) {
        res.send(e).status(500)
    }
})
export default router;