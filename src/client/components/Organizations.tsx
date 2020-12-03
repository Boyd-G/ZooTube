import React from 'react';
import { Link } from "react-router-dom";
import { organizations } from "../types";


const Home: React.FC<IHomeProps> = () => {
    const [organizations, setOrganizations] = React.useState<organizations[]>([]);

    React.useEffect(() => {
        fetchOrganizations();
    }, []);

    const fetchOrganizations = async () => {
        try {
            let res = await fetch("/api/organizations/")
            let organizations: organizations[] = await res.json();
            //organizations.reverse();
            setOrganizations(organizations);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            {organizations.map((organization: organizations) => (
                <div key={organization.id} className="card shadow-lg m-2">
                    <div className="card-body">
                        <h4 className="card-title">{organization.title}</h4>
                        <h5 className="card-title">{organization.name}</h5>
                        <h6 className="card-title">{organization.email}</h6>
                        <p className="card-text">{organization.content}</p>
                        <Link to={`/organization/${organization.id}/admin`}>
                            <button className="btn btn-sm btn-outline-dark float-right">Admin Options</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

interface IHomeProps { }

export default Home