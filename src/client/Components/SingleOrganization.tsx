// import React from 'react';
// import { RouteComponentProps } from "react-router-dom";
// import { organization } from "../OrgTypes";


// const SingleOrganization: React.FC<ISingleOrganizationProps> = (props: ISingleOrganizationProps) => {
//     const [organizations, setOrganization] = React.useState<organization>({

//         // id: "",	
//         animalName: "",
//         organization: "",
//         organizationType: "",
//         description: "",
//         organizationFunfact: "",
//         camUrl: "",
//         homeUrl: "",
//         supportUrl: ""

//     });

//     React.useEffect(() => {
//         (async () => {
//             try {
//                 let res = await fetch(`/api/streams/organizations/${props.match.params.id}`);
//                 let organization = await res.json();
//                 setOrganization(organization);
//             } catch (err) {
//                 console.log(err);
//             }
//         })();
//     }, []);




//     return (
//         <div className="container">
//             <div className="card shadow-lg m-2">
//                 <div className="card-body">

                    

//                     <h3 className="card-title">{organizations.animalName}</h3>
//                     <h4 className="card-title">{organizations.organizationType}</h4>
                    	
//                     <h4 className="card-title">{organizations.organization}</h4>
//                     <h5 className="card-title">{organizations.description}</h5>
//                     <iframe width="696" height="346" src={organizations.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

//                     <h5 className="card-title">{organizations.organizationFunfact}</h5>

//                     <div className="allBtns">
//                         <a href={organizations.homeUrl} target="_blank"><button className="btn btn-sm btn-outline-success m-2">More info!</button></a>
//                         <a href={organizations.supportUrl} target="_blank"><button className="btn btn-sm btn-outline-success m-2">Donate!</button></a>
//                     </div>

//                     <h5 className="card-title">{organizations.camUrl}</h5>


//                     <div className="row">	
//                         <input type="text" className="card-title" placeholder="Title" defaultValue={blog.title} onChange={onTitleChange} />	
//                     </div>	
//                     <div className="row">	
//                         <input type="text" className="card-title" placeholder="Name" defaultValue={blog.name} onChange={onAuthorNameChange} />	
//                     </div>	
//                     <div className="row">	
//                         <input type="text" className="card-title" placeholder="Email" defaultValue={blog.email} onChange={onEmailChange} />	
//                     </div>	
//                     <div className="row">	
//                         <textarea className="card-text" placeholder="Blog" defaultValue={blog.content} cols={50} rows={15} onChange={(e) => onContentChange(e)}></textarea>	
//                     </div>	
//                     <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => editBlog(blog.id)}>Save</button>	
//                     <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => deleteBlog(blog.id)}>Delete</button>
//                 </div>
//             </div>
//         </div>

        
//     )
// }

// interface ISingleOrganizationProps extends RouteComponentProps<{ id: string }> { }

// export default SingleOrganization; 

import React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import { organization } from "../OrgTypes";



const singleOrganizations: React.FC<ISingleOrganizationProps> = (props) => {
    const [organizations, setSingleOrganizations] = React.useState<organization[]>([]);

    React.useEffect(() => {
        fetchSingleOrganizations();
    }, []);

    const fetchSingleOrganizations = async () => {
        try {
            let res = await fetch(`/api/streams/organizations/${props.match.params.id}`)
            let organizations: organization[] = await res.json();
            // organizations.reverse();
            setSingleOrganizations(organizations);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            {organizations.map((organization: organization, index) => (
                <div key={index} className="card shadow-lg m-2">
                    <div className="card-body">
                    {/* <h4 className="card-title">{organization.organization}</h4> */}
                    <h5 className="card-title">{organization.animalName}</h5>
                    <img src={organization.animalImageUrl} alt={organization.animalName}/>
                    {/* <iframe width="696" height="346" src={organization.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
                    <h5 className="card-title">{organization.animalFunfact}</h5>
                        <Link to={`/streams/organizations/${organization.id}`}>
                            <button className="btn btn-sm btn-outline-dark float-right">Live Stream</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

interface ISingleOrganizationProps extends RouteComponentProps<{id: string}> { }

export default singleOrganizations