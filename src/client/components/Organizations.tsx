import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { organizations } from "../types";


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