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
                    <img src="https://zooatlanta.org/wp-content/uploads/2016/11/zoo-entrance.jpg" className="card-img-top" alt="ATL ZOO FAM" />
                    <div className="card-body">
                        <h5 className="card-title">Atlanta Zoo</h5>
                        <p className="card-text">Click here to watch animals at the Atlana zoo!</p>
                        <p className="card-text"><small className="text-danger">LIVE</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/bham-zoo-1562091946.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" className="card-img-top" alt="BHM ZOO IMAGE" />
                    <div className="card-body">
                        <h5 className="card-title">Birmingham Zoo</h5>
                        <p className="card-text">Click here to watch animals at the Birmingham zoo!</p>
                        <p className="card-text"><small className="text-danger live">LIVE</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://timesofsandiego.com/wp-content/uploads/2017/03/San-Diego-Zoo-1280x720.jpg" className="card-img-top" alt="sloth image" />
                    <div className="card-body">
                        <h5 className="card-title">San Diego Zoo</h5>
                        <p className="card-text">Click here to watch animals at the San Diego zoo!</p>
                        <p className="card-text"><small className="text-danger live">LIVE</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface AnimalProps { }

export default Animals;