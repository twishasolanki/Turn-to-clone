// // src/components/Map.tsx

// import React from 'react';
// import GoogleMapReact from 'google-map-react';

// interface AnyReactComponentProps {
//   lat: number;
//   lng: number;
//   text: string;
// }

// const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => (
//   <div style={{
//     color: 'white', 
//     background: 'red',
//     padding: '15px 10px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '50%',
//     transform: 'translate(-50%, -50%)'
//   }}>
//     {text}
//   </div>
// );

// const SimpleMap: React.FC = () => {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={10.99835602}
//           lng={77.01502627}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
    
//   );
// }

// export default SimpleMap;


// import { map, latLng, tileLayer, MapOptions } from "leaflet";

// import 'leaflet/dist/leaflet.css';

// const options: MapOptions = {
//   center: latLng(40.731253, -73.996139),
//   zoom: 12,
// };

// const mymap = map('map', options);

// const key = "YOUR_MAPTILER_API_KEY_HERE";

// tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,{ //style URL
//   tileSize: 512,
//   zoomOffset: -1,
//   minZoom: 1,
//   attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
//   crossOrigin: true
// }).addTo(mymap);


