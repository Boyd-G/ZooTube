// import React from "react";
// import { Link, RouteComponentProps } from "react-router-dom";
// import { animals } from "../AnimalTypes";

// // const singleStreams: React.FC<ISingleStreamsProps> = (props) => {
//   const [streams, setSingleStreams] = React.useState<animals[]>([]);

//   React.useEffect(() => {
//     fetchSingleStreams();
//   }, []);

// //   const fetchSingleStreams = async () => {
// //     try {
// //       let res = await fetch(`/api/streams/animals/${props.match.params.id}`);
// //       let streams: any[] = await res.json();
// //       // organizations.reverse();
// //       setSingleStreams(streams);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

//   return;
//   <div className="container">
//     {streams.map((streams: any, index) => (
//       <div key={index} className="card shadow-lg m-2">
//         <div className="card-body">
//           {/* <h4 className="card-title">{organization.organization}</h4> */}
//           <h5 className="card-title">{streams.animalName}</h5>
//           <img src={streams.animalImageUrl} alt={streams.animalName} />
//           {/* <iframe width="696" height="346" src={organization.camUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
//           <h5 className="card-title">{streams.animalFunfact}</h5>
//           <Link to={`/streams/organizations/${streams.id}`}>
//             <button className="btn btn-sm btn-outline-dark float-right">
//               Live Stream
//             </button>
//           </Link>
//         </div>
//       </div>
//     ))}
//   </div>;
// };

// interface ISingleStreamsProps extends RouteComponentProps<{ id: string }> {}

// export default singleStreams;
