'use client';
import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { FaLocationCrosshairs } from "react-icons/fa6";

interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
  onClick?: () => void;
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
  setSelectedItemcard: (id: number | null) => void;
  selectedItemcard: number | null;
  isOpen: boolean;
  onClick: () => void;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ onBackClick, setSelectedItemcard, selectedItemcard, isOpen, onClick }) => {
  const [userPosition, setUserPosition] = useState<{ lat: number, lng: number } | null>(null);
  const [mapObject, setMap] = useState<any>(null);

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
    <>
      <div
        style={{ height: '100vh', width: '100%' }}
        className="absolute h-screen w-screen"
        onClick={selectedItemcard !== null ? onBackClick : undefined}
      >
        {userPosition && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }}
            center={userPosition}
            defaultZoom={defaultProps.zoom}
            options={{
              zoomControl: false, 
              fullscreenControl: false, 
            }}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <AnyReactComponent
              lat={userPosition.lat}
              lng={userPosition.lng}
              text={'Your Location'}
            />
          </GoogleMapReact>
        )}
      </div>
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
    </>
  );
}

export default SimpleMap;












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



// const SimpleMap: React.FC<Home> = ({onBackClick,onBackDrawerClick,onOpenDrawer,text,title,url }) => {
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

//   const [mapObject, setMap] = useState(null);
//   const handleApiLoaded = (map: any, maps: any) => {
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
//     <div style={{ height: '100vh', width: '100%' }} className="absolute h-screen w-screen">
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
//       <div className='fixed bottom-6 2xl:left-[95%] xl:left-[95%] lg:left-[93%] md:left-[100%] mt-auto'
//         onClick={moveToUserLocation}>
//         <button
//           type="button"
//           className='relative mg:ms-48 ms:ms-40 xd:ms-36 bg-gray-100 shadow-xl shadow-black rounded-md md:px-4 px-2 md:py-4 py-2 md:ms-5 card-body flex'>
//           <FaLocationCrosshairs />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SimpleMap;