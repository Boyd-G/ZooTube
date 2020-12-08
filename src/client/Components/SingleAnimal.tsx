import React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import { animals } from "../AnimalTypes";



const singleAnimal: React.FC<ISingleAnimalProps> = (props) => {
    const [animal, setSingleAnimal] = React.useState<animals[]>([]);

    React.useEffect(() => {
        fetchSingleAnimal();
    }, []);

    const fetchSingleAnimal = async () => {
        try {
            let res = await fetch(`/api/streams/animals/${props.match.params.id}`)
            let Animal: animals[] = await res.json();
            // Animal.reverse();
            setSingleAnimal(Animal);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            {animal.map((animal: animals, index) => (
                <div key={index} className="card shadow-lg m-2">
                    <div className="card-body">
                    {/* <h4 className="card-title">{animal.animal}</h4> */}
                    <h5 className="card-title">{animal.animalName}</h5>
                    {/* <img src={animal.animalImageUrl} alt={animal.animalName}/> */}
                    <iframe width="696" height="346" src={animal.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <h5 className="card-title my-3">Species: {animal.description}</h5>
                    <h5 className="card-title">{animal.animalFunfact}</h5>
                    {/* <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => (animal.supportUrl)}>Save</button> */}
                        <Link to={`${animal.supportUrl}`}>
                            <button className="btn btn-sm btn-outline-dark float-right">Donate Now</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

interface ISingleAnimalProps extends RouteComponentProps<{id: string}> { };

export default singleAnimal 