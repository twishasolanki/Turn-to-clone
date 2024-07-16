// "use client"
// import React from "react";
// import GoogleMapReact from 'google-map-react';

// interface AnyReactComponentProps {
//   lat: number;
//   lng: number;
//   text: string;
// }

// const AnyReactComponent = (props:AnyReactComponentProps) => <div>{props.text}</div>;

// const SimpleMap: React.FC = () => {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
   
//     <div style={{ height: '100vh', width: '100%' }} className="absolute h-screen w-screen ">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }} 
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}      
//       >
//      <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }

// export default SimpleMap;


"use client"
import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent = (props: AnyReactComponentProps) => <div>{props.text}</div>;

const SimpleMap: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<{ lat: number, lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current position: ", error);
          // Optionally, set a default position if geolocation fails
          setCurrentPosition({
            lat: 10.99835602,
            lng: 77.01502627,
          });
        }
      );
    } else {
      // Geolocation not supported, set a default position
      setCurrentPosition({
        lat: 10.99835602,
        lng: 77.01502627,
      });
    }
  }, []);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '100vh', width: '100%' }} className="absolute h-screen w-screen">
      {currentPosition && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={currentPosition} // Set the center to the current position
        >
          <AnyReactComponent
            lat={currentPosition.lat}
            lng={currentPosition.lng}
         
          />
        </GoogleMapReact>
      )}
    </div>
  );
}

export default SimpleMap;

// 'use client'
// import React, { useState, useEffect } from "react";
// import GoogleMapReact from 'google-map-react';

// interface AnyReactComponentProps {
//   lat: number;
//   lng: number;
//   text: string;
//   zoom: number;
// }

// const AnyReactComponent = (props: AnyReactComponentProps) => (
//   <div style={{
//     position: 'absolute',
//     transform: 'translate(-50%, -50%)',
//     background: 'rgba(0, 0, 0, 0.5)',
//     color: 'white',
//     padding: '8px',
//     borderRadius: '50%',
//     fontSize: `${12 * (21 - props.zoom)}px`, // Adjust font size based on zoom level
//     fontWeight: 'bold',
//     pointerEvents: 'none',
//     height:'100px',
//     width:'100px'
//   }}>
//     {props.text}
//   </div>
// );

// const SimpleMap: React.FC = () => {
//   const [currentPosition, setCurrentPosition] = useState<{ lat: number, lng: number } | null>(null);
//   const [locationName, setLocationName] = useState<string>('Unknown'); // Default name
//   const [mapZoom, setMapZoom] = useState<number>(11); // Default zoom level

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentPosition({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           // Fetch location name using reverse geocoding or any other method
//           fetchLocationName(position.coords.latitude, position.coords.longitude);
//         },
//         (error) => {
//           console.error("Error getting current position: ", error);
//           // Optionally, set a default position if geolocation fails
//           setCurrentPosition({
//             lat: 10.99835602,
//             lng: 77.01502627,
//           });
//           setLocationName('Default Location');
//         }
//       );
//     } else {
//       // Geolocation not supported, set a default position
//       setCurrentPosition({
//         lat: 10.99835602,
//         lng: 77.01502627,
//       });
//       setLocationName('Default Location');
//     }
//   }, []);

//   const fetchLocationName = async (lat: number, lng: number) => {
//     // You can implement fetching location name here using reverse geocoding or any service
//     // For simplicity, I'll just set a default name
//     setLocationName('');
//   };

//   const handleMapChange = (newZoom: number) => {
//     setMapZoom(newZoom);
//   };

//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }} className="absolute h-screen w-screen">
//       {currentPosition && (
//         <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }}
//           defaultCenter={defaultProps.center}
//           defaultZoom={defaultProps.zoom}
//           center={currentPosition} // Set the center to the current position
//           onChange={({ zoom }) => handleMapChange(zoom)}
//         >
//           <AnyReactComponent
//             lat={currentPosition.lat}
//             lng={currentPosition.lng}
//             text={locationName}
//             zoom={mapZoom}
//           />
//         </GoogleMapReact>
//       )}
//     </div>
//   );
// }

// export default SimpleMap;
