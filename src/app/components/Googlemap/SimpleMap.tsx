// 'use client';
// import React, { useState, useEffect } from "react";
// import GoogleMapReact from 'google-map-react';
// import { FaLocationCrosshairs } from "react-icons/fa6";

// interface AnyReactComponentProps {
//   lat: number;
//   lng: number;
//   text: string;
// }

// const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ lat, lng, text }) => (
//   <div className="position-absolute markerPointRound">
//     <div>
//       <img height={30} width={30} src={"/assets/Location.png"} alt="Marker" />
//       {text}
//     </div>
//   </div>
// );

// interface SimpleMapProps {
//   onBackClick: () => void;
//   onBackDrawerClick: () => void;
//   title: string;
//   text: string;
//   url: string;
//   onOpenDrawer: () => void;
// }

// const SimpleMap: React.FC<SimpleMapProps> = ({ onBackClick, onBackDrawerClick, onOpenDrawer, title, text, url }) => {
//   const [userPosition, setUserPosition] = useState<{ lat: number, lng: number } | null>(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserPosition({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Error getting current position: ", error);
//           setUserPosition({
//             lat: 10.99835602,
//             lng: 77.01502627,
//           });
//         }
//       );
//     } else {
//       setUserPosition({
//         lat: 10.99835602,
//         lng: 77.01502627,
//       });
//     }
//   }, []);

//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   const handleClick = () => {
//     onBackDrawerClick
//     onBackClick
//     onOpenDrawer
    
//   };
 
//   const [mapObject, setMap] = useState(null);
//   const handleApiLoaded = (map:any, maps:any) => {
//     setMap(map);
//   } 
//   const moveToUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           // console.log(position);
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           // console.log("mapObject", mapObject);
//           if (mapObject) {
//             mapObject.panTo(userLocation);
//             //userHomePage(userLocation.lat, userLocation.lng);
//           }
//         },
//       );
//     } else {
//       //setLocationmsg(true);
//       console.error("Geolocation is not supported by your browser");
//     }
//   };
//   return (
//     <div style={{ height: '100vh', width: '100%' }} className="absolute h-screen w-screen" onClick={
//       ()=>{handleClick

//         console.log('click');
//       }}>
//       {userPosition && (
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }}
//           center={userPosition}
//           defaultZoom={defaultProps.zoom} 
//           onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//         >
//           <AnyReactComponent
//             lat={userPosition.lat}
//             lng={userPosition.lng}
//             text={'Your Location'}
//           />
//         </GoogleMapReact>
//       )}
//          <div className='fixed bottom-6 2xl:left-[95%] xl:left-[95%] lg:left-[93%] md:left-[100%] mt-auto'
//          onClick={moveToUserLocation}>
//                 <button
//                     type="button"
//                     className='relative mg:ms-48 ms:ms-40 xd:ms-36 bg-gray-100 shadow-xl shadow-black rounded-md md:px-4 px-2 md:py-4 py-2 md:ms-5 card-body flex'>
//                     <FaLocationCrosshairs />
//                 </button>
//             </div>
//     </div>
//   );
// }

// export default SimpleMap;


'use client';
import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { FaLocationCrosshairs } from "react-icons/fa6";

interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ lat, lng, text }) => (
  <div className="position-absolute markerPointRound">
    <div>
      <img height={30} width={30} src={"/assets/Location.png"} alt="Marker" />
      {text}
    </div>
  </div>
);

interface SimpleMapProps {
  onBackClick: () => void;
  onBackDrawerClick: () => void;
  title: string;
  text: string;
  url: string;
  ColseDrawer: () => void;
  onOpenDrawer: () => void;
}


const SimpleMap: React.FC<SimpleMapProps> = ({ ColseDrawer , onBackClick, onBackDrawerClick, onOpenDrawer, title, text, url} ) => {
  const [userPosition, setUserPosition] = useState<{ lat: number, lng: number } | null>(null);
  
  console.log(ColseDrawer);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current position: ", error);
          setUserPosition({
            lat: 10.99835602,
            lng: 77.01502627,
          });
        }
      );
    } else {
      setUserPosition({
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

  const handleClick = () => {
    // onBackDrawerClick
    // onBackClick
    // onOpenDrawer
    // ColseDrawer()
    console.log(' clicked ');
  };

  const [mapObject, setMap] = useState(null);
  const handleApiLoaded = (map: any, maps: any) => {
    setMap(map);
  };

  const moveToUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          if (mapObject) {
            mapObject.panTo(userLocation);
          }
        },
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };

  return (
    <div
      style={{ height: '100vh', width: '100%' }}
      className="absolute h-screen w-screen"
      onClick={handleClick}
    >
      {userPosition && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }}
          center={userPosition}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={userPosition.lat}
            lng={userPosition.lng}
            text={'Your Location'}
          />
        </GoogleMapReact>
      )}
      <div className='fixed bottom-6 2xl:left-[95%] xl:left-[95%] lg:left-[93%] md:left-[100%] mt-auto'
        onClick={moveToUserLocation}
      >
        <button
          type="button"
          className='relative mg:ms-48 ms:ms-40 xd:ms-36 bg-gray-100 shadow-xl shadow-black rounded-md md:px-4 px-2 md:py-4 py-2 md:ms-5 card-body flex'
        >
          <FaLocationCrosshairs />
        </button>
      </div>
    </div>
  );
}

export default SimpleMap;
