
//------ZACH'S PLACEHOLDER------
// import React from 'react';
// import { Link } from "react-router-dom";
// import '../scss/app.scss'


// const Animals: React.FC<AnimalProps> = (props: AnimalProps) => {
//     const [animal, setAnimals] = React.useState();




//     // React.useEffect(() => {
//     //     (async () => {
//     //         let data = await fetch("/api/blogs")
//     //         let animals = await data.json();
//     //         animals.reverse();
//     //         setAnimals(animals);
//     //     })();
//     // }, [])

//     return (
//         <div>
//             <div className="card-group">
//                 <div className="card">
//                     <img src="https://zooatlanta.org/wp-content/uploads/2016/11/zoo-entrance.jpg" className="card-img-top" alt="ATL ZOO FAM" />
//                     <div className="card-body">
//                         <h5 className="card-title">Atlanta Zoo</h5>
//                         <p className="card-text">Click here to watch animals at the Atlana zoo!</p>
//                         <p className="card-text"><small className="text-danger">LIVE</small></p>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <img src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/bham-zoo-1562091946.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" className="card-img-top" alt="BHM ZOO IMAGE" />
//                     <div className="card-body">
//                         <h5 className="card-title">Birmingham Zoo</h5>
//                         <p className="card-text">Click here to watch animals at the Birmingham zoo!</p>
//                         <p className="card-text"><small className="text-danger live">LIVE</small></p>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <img src="https://timesofsandiego.com/wp-content/uploads/2017/03/San-Diego-Zoo-1280x720.jpg" className="card-img-top" alt="sloth image" />
//                     <div className="card-body">
//                         <h5 className="card-title">San Diego Zoo</h5>
//                         <p className="card-text">Click here to watch animals at the San Diego zoo!</p>
//                         <p className="card-text"><small className="text-danger live">LIVE</small></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




// interface AnimalProps { }

// export default Animals;

import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { organizations } from "../OrgTypes";


const SingleOrganization: React.FC<ISingleOrganizationProps> = (props: ISingleOrganizationProps) => {
    const [organizations, setOrganization] = React.useState<organizations>({

        id: "",
        organization: "",
        description: "",
        organizationFunFact: ""
    });

    React.useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/streams/organizations/${props.match.params.id}`);
                let organization = await res.json();
                setOrganization(organization);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    

    
    return (
        <div className="container">
            <div className="card shadow-lg m-2">
                <div className="card-body">
                    <div className="row">
                        <h3 className="card-title">{organizations.id}</h3>
                        <h4 className="card-title">{organizations.organization}</h4>
                        <h5 className="card-title">{organizations.description}</h5>
                        <h5 className="card-title">{organizations.organizationFunFact}</h5>
                    </div>
                    {/* <div className="row">
                        <input type="text" className="card-title" placeholder="Title" defaultValue={blog.title} onChange={onTitleChange} />
                    </div>
                    <div className="row">
                        <input type="text" className="card-title" placeholder="Name" defaultValue={blog.name} onChange={onAuthorNameChange} />
                    </div>
                    <div className="row">
                        <input type="text" className="card-title" placeholder="Email" defaultValue={blog.email} onChange={onEmailChange} />
                    </div> */}
                    {/* <div className="row">
                        <textarea className="card-text" placeholder="Blog" defaultValue={blog.content} cols={50} rows={15} onChange={(e) => onContentChange(e)}></textarea>
                    </div>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => editBlog(blog.id)}>Save</button>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => deleteBlog(blog.id)}>Delete</button> */}
                </div>
            </div>
        </div>
    )
}

interface ISingleOrganizationProps extends RouteComponentProps<{ id: string }> { }

export default SingleOrganization;