import React from 'react';
import { Link } from "react-router-dom";
import '../scss/app.scss'



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
        <div>
            <div className="card-group">
                <div className="card">
                    <img src="" className="card-img-top" alt="Picture of a penguin" />
                    <div className="card-body">
                        <h5 className="card-title">Penguin</h5>
                        <p className="card-text">Click here to find all penguin streams!</p>
                        <p className="card-text"><small className="text-danger">LIVE</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Carcharias_taurus_SI.jpg" className="card-img-top" alt="Tiger sand shark image" />
                    <div className="card-body">
                        <h5 className="card-title">Tiger Sand Shark</h5>
                        <p className="card-text">Click here to see the awesome tiger sand shark!</p>
                        <p className="card-text"><small className="text-danger">LIVE</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.beano.com/store/ee340d559eb6f3a03dda5a81532dca829bee0399629a436d1582c652ee8d?auto=compress%2Cformat&dpr=2.625&w=390" className="card-img-top" alt="sloth image" />
                    <div className="card-body">
                        <h5 className="card-title">Sloth</h5>
                        <p className="card-text">Click here to watch the sloth!</p>
                        <p className="card-text"><small className="text-danger">LIVE</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface AnimalProps { }

export default Animals;