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

  return (
    <div className="container w-75">
      {animal.map((animal: animals, index) => (
        <div key={index} className="card shadow-lg m-2 ">
          <div className="card-body justify-content-center ">
            <h1 className="card-title m-3">{animal.animalName}</h1>
            <h5 className="card-title m-3">Species: ({animal.description})</h5>
            <div className="d-flex justify-content-center align-items-center">
              <iframe width="696" height="346" src={animal.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
            {/* <h4 className="card-title">FUNFACT: {animal.animalFunFact}</h4> */}
            <a href={animal.supportUrl} target="_blank">
              <button className="btn btn-sm btn-success m-2">Donate!</button>
            </a>
            <a href={animal.homeUrl} target="_blank">
              <button className="btn btn-sm btn-success m-2 float-right">More info!</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

interface ISingleAnimalProps extends RouteComponentProps<{ id: string }> { }

export default singleAnimal;
