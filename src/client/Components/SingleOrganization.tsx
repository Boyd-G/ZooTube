import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { organization } from "../OrgTypes";

const singleOrganizations: React.FC<ISingleOrganizationProps> = (props) => {
  const [organizations, setSingleOrganizations] = React.useState<
    organization[]
  >([]);

  React.useEffect(() => {
    fetchSingleOrganizations();
  }, []);

  const fetchSingleOrganizations = async () => {
    try {
      let res = await fetch(
        `/api/streams/organizations/${props.match.params.id}`
      );
      let organizations: organization[] = await res.json();
      // organizations.reverse();
      setSingleOrganizations(organizations);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container w-50">
      {organizations.map((organization: organization, index) => (
        <div key={index} className="card shadow-lg m-2">
          <div className="card-body justify-content-center ">
            {/* <h4 className="card-title">{organization.organization}</h4> */}
            <h5 className="card-title">{organization.animalName}</h5>
            <div className="d-flex align-items-center ">
              <img
                src={organization.animalImageUrl}
                alt={organization.animalName}
              />
              {/* <iframe width="696" height="346" src={organization.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
            </div>
              <h5 className="card-title">
                {organization.animalFunfact}
              </h5>
              <Link to={`/streams/animals/${organization.id}`}>
                <button className="btn btn-sm btn-outline-dark float-right">
                  Live Stream
                </button>
              </Link>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

interface ISingleOrganizationProps
  extends RouteComponentProps<{ id: string }> {}

export default singleOrganizations;
