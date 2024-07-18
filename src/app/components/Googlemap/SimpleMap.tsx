"use client";
import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

interface AnyReactComponentProps {
  lat: number;
  lng: number;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ lat, lng }) => {
  return (
    <div style={{
      color: 'white',
      background: 'blue',
      padding: '5px 10px',
      display: 'inline-flex',
      position:'fixed',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
    
    </div>
  );
};

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
          setCurrentPosition({
            lat: 10.99835602,
            lng: 77.01502627,
          });
        }
      );
    } else {
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
          center={currentPosition}
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
