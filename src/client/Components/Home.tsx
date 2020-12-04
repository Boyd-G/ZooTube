import React from 'react';
import { Link } from 'react-router-dom';
import  Cams  from '../Camtypes';

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
                        <h5 className="card-title">Atlanta Zoo</h5>
                        <p className="card-text">Zoo</p>
                        <iframe width="696" height="346" src="https://www.youtube.com/embed/1bTw9xzhD1A" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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







