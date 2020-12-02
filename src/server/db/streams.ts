import { Query } from './index'

export const all  = async () => Query("select  Cams.id, Animals.animalName, organization.organization, organizationType.organizationType,  Cams.homeUrl, Cams.camUrl, Cams.supportUrl, Cams.embed From Cams join Animals on (Cams.animals=Animals.id)join Organization on (Cams.organization= Organization.id) join organizationType on (Cams.organizationType=organizationType.id)")

export const singleStream  = async (id: number) =>  Query(`SELECT * FROM CAMS WHERE id = ? `, [id]) 

export const allOrganizations  = async  () => Query("SELECT * FROM ORGANIZATIONS")

export const singleOrganization = async (organization: string) => Query(`SELECT * FROM ORGANIZATIONS WHERE ORGANIZATION = ?`, [organization])

export const allOrganizationTypes = async () => Query("SELECT * FROM ORGANIZATIONTYPES")

export const singleOrganizationType = async (organizationtype: string) => Query(`SELECT * FROM ORGANIZATIONTYPES WHERE ORGANIZATIONTYPE = ?`, [organizationtype])

export const allAnimals =  async () => Query("SELECT * FROM ANIMALTYPES")

export const singleAnimal = async (animaltypes: string) => Query(`SELECT * FROM ANIMALTYPES WHERE ANIMALTYPES =?`, [animaltypes])


    

export default {
    all,
    singleStream,
    allOrganizations,
    singleOrganization,
    allOrganizationTypes,
    singleOrganizationType,
    allAnimals,
    singleAnimal
}
