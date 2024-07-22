"use client";
import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';


interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => (
  <div className="position-absolute markerPointRound">
    <div>
      <img height={30} width={30} src={"./assets/Location.png"} alt="Marker" />
      {text}
    </div>
  </div>
);

const SimpleMap: React.FC = () => {
  const [userPosition, setUserPosition] = useState<{ lat: number, lng: number } | null>(null);

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

  
  return (
    <div style={{ height: '100vh', width: '100%' }} className="absolute h-screen w-screen">
      {userPosition && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }}
          center={userPosition} // This keeps the map centered on the user's position
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent 
            lat={userPosition.lat} 
            lng={userPosition.lng} 
            text={'Your Location'} 
          />
        </GoogleMapReact>
      )}
    </div>
  );
}

export default SimpleMap;

