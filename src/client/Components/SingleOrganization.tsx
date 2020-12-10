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

  const showModal = () => {
    let modal = document.getElementById('exampleModalCenter')
    modal.style
    console.log(modal)
  }

  return (
    <div className="container justify-content-center" style={{ width: 945}}>
      {organizations.map((organization: organization, index) => (
        <div key={index} className="card shadow-lg bg-secondary m-2 w-75">
          <div className="card-body justify-content-center ">
            {/* <h4 className="card-title">{organization.organization}</h4> */}
            <h5 className="card-title text-light">{organization.animalName}</h5>
            <div className="d-flex align-items-center ">
              <img src={organization.animalImageUrl} alt={organization.animalName} />
              {/* <iframe width="696" height="346" src={organization.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
            </div>

            <button type="button" className="btn btn-sm btn-primary my-3" id='modalButton' data-toggle="modal" data-target="#exampleModalCenter">
              Animal Fun Fact
            </button>

            <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Animal Fun Fact</h5>
                    {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">{organization.animalFunfact}</span>
                    </button> */}
                  </div>
                  <div className="modal-body">
                    <span aria-hidden="true">{organization.animalFunfact}</span>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <h5 className="card-title my-3">
                {organization.animalFunfact}
              </h5> */}
              
            <Link to={`/streams/animals/${organization.id}`}>
              <button className="btn btn-sm btn-danger float-right m-3">Live Stream</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

interface ISingleOrganizationProps
  extends RouteComponentProps<{ id: string }> { }

export default singleOrganizations;
