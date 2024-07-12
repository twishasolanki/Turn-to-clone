"use client"
import React from "react";
import GoogleMapReact from 'google-map-react';

interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent = (props:AnyReactComponentProps) => <div>{props.text}</div>;

const SimpleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
   
    <div style={{ height: '100vh', width: '100%' }} className="absolute h-screen w-screen ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAphqs0cLvsr4WKrLPrPvX6m_Yve07KCBA" }} 
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}      
      >
     <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
