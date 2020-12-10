import * as React from "react";
import { useState, useEffect } from "react";
import { Link, RouteComponentProps, useParams } from "react-router-dom";
import { IAnimal } from "../AnimalTypes";

const singleAnimal: React.FC<ISingleAnimalProps> = (props) => {
  let { id } = useParams()

  const [animal, setSingleAnimal] = useState<IAnimal>(Object);

  const fetchSingleAnimal = async () => {
    try {
      let res = await fetch(`/api/streams/animals/${id}`);
      let data = await res.json();
      // Animal.reverse();

      setSingleAnimal(data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  // if (animal.embed=="yes")

  useEffect(() => {
    fetchSingleAnimal();
  }, []);

  if (animal.embed === "yes") {
    return (
      <>
        <div className="container" style={{ width: 700 }}>
          <div className="card shadow-lg mt-5 bg-secondary">
            <div className="card-body justify-content-center w-25ç">
              <h1 className="card-title text-light">{animal.animalName}</h1>
              <h5 className="card-title text-light">Species: {animal.description}</h5>
              <div className="d-flex justify-content-center align-items-center">

                <iframe width="696" height="346" src={animal.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              </div>
              {/* <h4 className="card-title">FUNFACT: {animal.animalFunFact}</h4> */}

              <a href={animal.supportUrl} target="_blank">
                <button className="btn btn-sm btn-success mt-2">Donate!</button>
              </a>
              <a href={animal.homeUrl} target="_blank">
                <button className="btn btn-sm btn-success mt-2 float-right">More info!</button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="container" style={{ width: 700 }}>
          <div className="card shadow-lg bg-secondary mt-2">
            <div className="card-body justify-content-center">
              <h1 className="card-title text-light">{animal.animalName}</h1>
              <h5 className="card-title text-light">Species: {animal.description}</h5>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img
                  src={animal.animalImageUrl}
                  alt={animal.animalName}
                />
              </div>
              {/* <h4 className="card-title">FUNFACT: {animal.animalFunFact}</h4> */}

              <a href={animal.supportUrl} target="_blank">
                <button className="btn btn-sm btn-success m-2">
                  Donate!
            </button>
              </a>
              <a href={animal.homeUrl} target="_blank">
                <button className="btn btn-sm btn-success m-2 float-right">
                  More info!
            </button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
};

interface ISingleAnimalProps extends RouteComponentProps<{ id: string }> { }

export default singleAnimal;
