import { Query } from './index'

export const all  = async () => Query("SELECT * FROM CAMS")

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
