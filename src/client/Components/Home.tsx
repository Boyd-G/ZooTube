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
                    <p className="card-text">Panda</p>
                    <iframe width="696" height="346" src="https://www.youtube.com/embed/1bTw9xzhD1A" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <div className="allBtns">
                        <a href="https://zooatlanta.org" target="_blank"><button className="btn btn-sm btn-outline-success m-2">More info!</button></a>
                        <a href="https://give.zooatlanta.org/donate" target="_blank"><button className="btn btn-sm btn-outline-success m-2">Donate!</button></a>
                    </div>
                </div>
            </div>
            <div className="card bg-light second">
                <div className="card-body">
                <a className="navbar-brand">
                    <div className="mission-image">
                        <img src="https://imgur.com/BP5xKjZ.png" className="img-fluid" />
                    </div>
                </a>
                    {/* <h5 className="card-title">Our Mission Statement</h5> */}
                    <p className="card-text">Zoos and rescues around the country and around the world provide an important service by conducting research, rescuing and rehabilitating animals, overseeing animal population management,
                    and providing education and entertainment to millions of people each year.  During the current global pandemic, zoos have seen a sharp decline in attendance.
                    Due to this there are less available resources to help home, rehabilitate, and care for these animals.
                    Our goal is to provide a way for people to engage, and donate, to these animals and organizations that we all love, from the safety of their own homes.</p>
                </div>
            </div>
            <div className="card bg-light third">
                <div className="card-body">
                    <p>FUN FACT: This panda goes to sleep during presentation</p>
                    {/* <h5 className="card-title">Could put text here</h5> */}
                    {/* <a className="navbar-brand">
                    <div className="sm-logo">
                        <img src="https://imgur.com/dlXCiM7.png" className="img-fluid" />
                    </div>
                </a><a className="navbar-brand">
                    <div className="sm-logo">
                        <img src="https://imgur.com/aaLP9XH.png" className="img-fluid" />
                    </div>
                </a><a className="navbar-brand">
                    <div className="sm-logo">
                        <img src="https://imgur.com/fjPwu61.png" className="img-fluid" />
                    </div>
                </a> */}


                </div>
            </div>
        </div>
    );
}

interface IHomeProps { }


export default Home;







