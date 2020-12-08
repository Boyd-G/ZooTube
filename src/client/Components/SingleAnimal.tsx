import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { animals } from "../AnimalTypes";

const singleAnimal: React.FC<ISingleAnimalProps> = (props) => {
  const [animal, setSingleAnimal] = React.useState<animals[]>([]);

  React.useEffect(() => {
    fetchSingleAnimal();
  }, []);

  const fetchSingleAnimal = async () => {
    try {
      let res = await fetch(`/api/streams/animals/${props.match.params.id}`);
      let Animal: animals[] = await res.json();
      // Animal.reverse();
      setSingleAnimal(Animal);
    } catch (err) {
      console.log(err);
    }
  };

<<<<<<< Updated upstream
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
=======
  return (
    <div className="container w-75">
      {animal.map((animal: animals, index) => (
        <div key={index} className="card shadow-lg m-2 ">
          <div className="card-body bg-secondary justify-content-center ">
            {/* <h4 className="card-title">{animal.animal}</h4> */}
           
                <h3 className="card-title text-light m-3">{animal.animalName}</h3>
                <h5 className="card-title text-light m-3">{animal.description}</h5>
              <div className="d-flex justify-content-center align-items-center">
                <img className="card-img max-width:85%" src={animal.animalImageUrl} alt={animal.animalName} />
                {/* <iframe width="696" height="346" src={animal.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
              </div>
                <h4 className="card-title text-light">
                  FUNFACT: {animal.animalFunFact}
                </h4>
                <Link to={`/streams/animals/${animal.id}`}>
                  <button className="btn btn-sm btn-outline-dark my-2">
                    Live Stream
                  </button>
                </Link>
                <Link to={`${animal.supportUrl}`}>
                  <button className="btn btn-sm btn-outline-dark my-2">
                    Find out how to give
                  </button>
                </Link>
                <Link to={`/streams/animals/${animal.id}`}>
                  <button className="btn btn-sm btn-outline-dark my-2">
                    Check out the {animal.organization}
                  </button>
                </Link>
             
          </div>
>>>>>>> Stashed changes
        </div>
      ))}
    </div>
  );
};

interface ISingleAnimalProps extends RouteComponentProps<{ id: string }> {}

export default singleAnimal;
