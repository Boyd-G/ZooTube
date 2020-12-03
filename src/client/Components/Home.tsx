import React from 'react';
import { Link } from 'react-router-dom';
import { Cams } from '../types';

function Home() {
    const [Cams, setCams] = React.useState<Cams>();
    React.useEffect(() => {
        fetchCams();
    }, []);
    const fetchCams = async () => {
        try {
            let res = await fetch("/all/1")
            let cams: Cams = await res.json();
            setCams(cams);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="container">
            <h3 className="ft">Featured Stream</h3>
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h5 className="card-title">Big and Small Dog Rescue</h5>
                        <p className="card-text">Shelter</p>
                        <iframe className="embed-responsive-item" src="https://video.nest.com/embedded/live/wLUawkckxh?autoplay=1" width="" allowFullScreen></iframe>
                        <div className="allBtns">
                        <a href="https://www.bdrr.org/" target="_blank"><button className="btn btn-sm btn-outline-dark m-2">More info!</button></a>
                        <a href="https://www.bdrr.org/donation-form" target="_blank"><button className="btn btn-sm btn-outline-dark m-2">Donate!</button></a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

interface IHomeProps { }


export default Home;







