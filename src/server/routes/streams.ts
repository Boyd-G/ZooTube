import * as express from 'express';
import DB from "../db"
import { OkPacket } from "mysql"
const router = express.Router();

// router.get('/home', (req, res, next) => {
//     res.json('World');
// });

router.get('/', async (req, res) => {
    try {
    let streams = await DB.Streams.all()
    res.json(streams)
    } catch(e) {
        res.sendStatus(500)
    }
})
router.get('/:id', async (req, res) => {
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
    let organizations = await DB.Streams.allOrganizations()
    res.json(organizations)
    } catch(e) {
        res.sendStatus(500)
    }
});
router.get('/:organization', async (req, res) => {
    try {
    const organization = String(req.params.organization);
    let singleOrg = await DB.Streams.singleOrganization(organization)
    res.json(singleOrg)
    } catch(e) {
        res.sendStatus(500)
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
router.get('/:animal', async (req, res) => {
    try {
    const animalType = String(req.params.animal);
    let oneAnimal = await DB.Streams.singleAnimal(animalType)
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
router.get('/:organizationtype', async (req, res) => {
    try {
        const organizationType = String(req.params.organizationtype)
    let singleOrgType = await DB.Streams.singleOrganizationType(organizationType)
    res.json(singleOrgType)
    } catch(e) {
        res.sendStatus(500)
    }
})
export default router;