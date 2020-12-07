import { Query } from './index'

export const all = async () => Query(`select  Cams.id,
 Animals.animalName, 
 organization.organization, 
 organizationType.organizationType,  
 Cams.homeUrl, 
 Cams.camUrl, 
 Cams.supportUrl, 
 Cams.embed 
 From Cams join Animals on (Cams.animals=Animals.id)
 join Organization on (Cams.organization= Organization.id) 
 join organizationType on (Cams.organizationType=organizationType.id)`)

export const singleStream = async (id: number) => Query(`select  Cams.id, 
Animals.animalName,
Animals.animalFunFact,
Animals.description,
organization.organization, 
organizationType.organizationType,  
Cams.homeUrl, 
Cams.camUrl, 
Cams.supportUrl, 
Cams.embed 
From Cams join Animals on (Cams.animals=Animals.id) 
join Organization on (Cams.organization = Organization.id) 
join organizationType on (Cams.organizationType=organizationType.id) 
WHERE cams.id = ?`, [id])

export const allOrganizations = async () => Query("select organization.* from organization")

export const singleOrganization = async (id: number) => Query(`select  Cams.id, 
    Animals.animalName, 
    Animals.animalFunfact,
    Animals.description,
    Animals.animalImageUrl,
    organization.id, 

    organization.organization, 
    organizationType.organizationType,  
    organization.organizationFunfact,
    organization.description,
    Organization.orgImageUrl,
    Cams.supportUrl, 
    Cams.homeUrl, 
    Cams.camUrl, 
    Cams.embed 
    From Cams 
    join Animals on (Cams.animals=Animals.id)
    join Organization on (Cams.organization = Organization.id) 
    join organizationType on (Cams.organizationType=organizationType.id) 
    where organization.id = ?`, [id])

export const allOrganizationTypes = async () => Query("SELECT * FROM ORGANIZATIONTYPE")

export const singleOrganizationType = async (id: number) => Query(`select  Cams.id, 
Animals.animalName, 
organization.id, 
organization.organization, 
organizationType.organizationType,  
organization.organizationFunfact,
organization.description,
Cams.supportUrl, 
Cams.homeUrl, 
Cams.camUrl, 
Cams.embed 
From Cams 
join Animals on (Cams.animals=Animals.id)
join Organization on (Cams.organization = Organization.id) 
join organizationType on (Cams.organizationType=organizationType.id) 
where organizationType.id = ?`, [id])

export const allAnimals = async () => Query("SELECT * FROM ANIMALS")

export const singleAnimal = async (id: number) => Query(`select  Cams.id, 
Animals.animalName,
Animals.animalFunFact,
Animals.description,
Animals.animalMapImage,
Animals.animalClassName,
Animals.animalImageUrl,
organization.organization, 
organizationType.organizationType,  
Cams.homeUrl, 
Cams.camUrl, 
Cams.supportUrl, 
Cams.embed 
From Cams join Animals on (Cams.animals=Animals.id) 
join Organization on (Cams.organization = Organization.id) 
join organizationType on (Cams.organizationType=organizationType.id) 
WHERE animals.id = ?`, [id])



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