import React from 'react';
import { Link } from "react-router-dom";
import '../scss/app.scss';
// import penguin from '../assets/animals/1_animal_penguin.jpg';



const Animals: React.FC<AnimalProps> = (props: AnimalProps) => {
    const [animal, setAnimals] = React.useState();

    // React.useEffect(() => {
    //     (async () => {
    //         let data = await fetch("/api/blogs")
    //         let animals = await data.json();
    //         animals.reverse();
    //         setAnimals(animals);
    //     })();
    // }, [])

    return (
        <React.Fragment>

            <div>
                <div className="card-group">
                    <div className="card"></div>
                    <img src="./assets/animals/1_animal_penguin.jpg" className="card-img-top" alt="Picture of a penguin" />
                    <div className="card-body">
                        <h5 className="card-title">Penguin</h5>
                        <p className="card-text">Click here to find all penguin streams!</p>
                        <p className="card-text"><small className="text-danger">LIVE</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./assets/animals/2_animal_sand_tiger_shark.jpg" className="card-img-top" alt="Tiger sand shark image" />
                    <div className="card-body">
                        <h5 className="card-title">Tiger Sand Shark</h5>
                        <p className="card-text">Click here to see the awesome tiger sand shark!</p>
                        <p className="card-text"><small className="text-danger">LIVE</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./assets/animals/4_animals_sloth.jpg" className="card-img-top" alt="sloth image" />
                    <div className="card-body">
                        <h5 className="card-title">Sloth</h5>
                        <p className="card-text">Click here to watch the sloth!</p>
                        <p className="card-text"><small className="text-danger">LIVE</small></p>
                    </div>
                </div>
            </div>
            
            </React.Fragment >
            )
        }

interface AnimalProps { }

export default Animals; 