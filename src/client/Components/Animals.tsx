import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "../scss/app.scss";
import { animals } from "../AnimalTypes";
// import penguin from '../assets/animals/1_animal_penguin.jpg';

const Animals: React.FC<IAnimalsProps> = () => {
const [animals, setAnimals] = React.useState<animals[]>([]);

React.useEffect(() => {
  fetchAnimals();
}, []);

const fetchAnimals = async () => {
  try {
    let res = await fetch("/api/streams/animals/");
    let animals: animals[] = await res.json();
    // organizations.reverse();
    setAnimals(animals);
  } catch (err) {
    console.log(err);
  }
};
  return (

    <React.Fragment>
    <div className="animal-container">
   <img src="https://i.imgur.com/joRpSs0.png" className="map" />  
      {animals.map((animals: animals) => (
        <div key={animals.id} >
          <Link to={`/streams/animals/${animals.id}`}>
          
            
            <img
            
              src={animals.animalMapImage}
              alt={animals.animalName}
              className={animals.animalClassName}
              />
         
              </Link>
        </div>
        
      ))}
      </div>
    </React.Fragment>
    // {
    /* <img src="https://i.imgur.com/joRpSs0.png" className="map" />
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://imgur.com/YtRHikg.png" alt="bottle" className="tiger" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://imgur.com/JZeJyxj.png" alt="bottle" className="grafe" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/Nbjh1Cy.png" alt="bottle" className="penguin" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/093I8kR.png" alt="bottle" className="otter" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/kK7qJIW.png" alt="bottle" className="dog" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/ftB1zDD.png" alt="bottle" className="elephant" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/PgnCmbW.png" alt="bottle" className="shark" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/TK4uTC1.png" alt="bottle" className="fish" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/ikhy3o0.png" alt="bottle" className="panda" />
                </a>
                <a href="https://www.google.com/" id="bottle" target="_blank">
                    <img src="https://i.imgur.com/DN6NNSz.png" alt="bottle" className="sloth" />
                </a> */

    /* <div className="card bg-secondary second-container animal-photos">
                    <div className="card-body">
                        <img src="./assets/animals/1_animal_penguin.jpg" className="card-img-top" alt="Picture of a penguin" />
                        <div className="card-body">
                            <h5 className="card-title">Penguin</h5>
                            <p className="card-text">Click here to find all penguin streams!</p>
                            <p className="card-text"><small className="text-danger">LIVE</small></p>
                        </div>
                    </div>
                    <div className="card bg-secondary second-container animal-photos">
                        <div className="card-body">
                            <img src="./assets/animals/2_animal_sand_tiger_shark.jpg" className="card-img-top" alt="Tiger sand shark image" />
                            <h5 className="card-title">Tiger Sand Shark</h5>
                            <p className="card-text">Click here to see the awesome tiger sand shark!</p>
                            <p className="card-text"><small className="text-danger">LIVE</small></p>
                        </div>
                    </div>
                    <div className="card bg-secondary second-container animal-photos">
                        <div className="card-body">
                        <img src="./assets/animals/4_animals_sloth.jpg" className="card-img-top" alt="sloth image" />
                            <h5 className="card-title">Sloth</h5>
                            <p className="card-text">Click here to watch the sloth!</p>
                            <p className="card-text"><small className="text-danger">LIVE</small></p>
                        </div>
                    </div>
                </div> */
  );
};

interface IAnimalsProps{} 

export default Animals;
