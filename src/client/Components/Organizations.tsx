import React from 'react';
import { Link } from "react-router-dom";
import { organization } from "../OrgTypes";


const Organizations: React.FC<IOrganizationProps> = () => {
    const [organizations, setOrganizations] = React.useState<organization[]>([]);

    React.useEffect(() => {
        fetchOrganizations();
    }, []);

    const fetchOrganizations = async () => {
        try {
            let res = await fetch("/api/streams/organizations/")
            let organizations: organization[] = await res.json();
            // organizations.reverse();
            setOrganizations(organizations);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container w-50">
            {organizations.map((organization: organization) => (

                <div key={organization.id} className="card shadow-lg m-2" style={{width:680}}>

                    <div className="card-body">
                    <h4 className="card-title">{organization.organization}</h4>
                    <img src={organization.orgImageUrl} alt={organization.animalName}/>
                    <h5 className="card-title my-3">{organization.description}</h5>

                    {/* <h5 className="card-title">{organization.organizationFunfact}</h5> */}
                        <Link to={`/streams/organizations/${organization.id}`}>
                            <button className="btn btn-sm btn-success">See Animals</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

interface IOrganizationProps { }

export default Organizations