import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/app.scss';
import Cams from '../Camtypes';

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
            <div className="card shadow-lg first" style={{ width: 750 }}>
                <div className="card-body">
                    <h5 className="card-title">Atlanta Zoo</h5>
                    <p className="card-text">Zoo</p>
                    <iframe width="696" height="346" src="https://www.youtube.com/embed/1bTw9xzhD1A" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <div className="allBtns">
                        <a href="https://zooatlanta.org" target="_blank"><button className="btn btn-sm btn-outline-dark m-2">More info!</button></a>
                        <a href="https://give.zooatlanta.org/donate" target="_blank"><button className="btn btn-sm btn-outline-dark m-2">Donate!</button></a>
                    </div>
                </div>
            </div>
            <div className="card bg-light second">
                <div className="card-body">
                    <h5 className="card-title">Our Mission Statement</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

interface IHomeProps { }


export default Home;







