import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import TurnTo from '@/app/components/Turnto/page';
import ButtonScroll from './components/ButtonScroll';

const Home: React.FC = () => {
  return (
    <>
      <div
        className="flex md:max-w-screen w-full md:max-h-screen h-screen bg-fixed"
        style={{
          backgroundImage: "url('./assets/MAP.png')",
          backgroundSize: 'cover',
           backgroundPosition: 'center',
        }}
      >
      <div className='flex fixed'>           
        <Sidebar />
        <TurnTo />
      </div>
  
     </div>
   
    </>
  );
};

export default Home;


// import React from 'react';
// import Sidebar from '@/app/components/Sidebar';
// import TurnTo from '@/app/components/Turnto/page';

// const Home: React.FC = () => {
//   return (
//     <>
//       <div className="relative h-screen w-screen">
//         <iframe
//           className="absolute top-0 left-0 w-full h-full border-0 "
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.675015531212!2d72.53763867539352!3d22.26920688528807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86e5b17a7fbb%3A0x858f4d37bbff5d3e!2sRajkot%2C%20Gujarat%20360001!5e0!3m2!1sen!2sin!4v1677046533035!5m2!1sen!2sin"
//           allowFullScreen={true}
//           loading="lazy"
//         />
//         <div className="relative flex h-full w-full">
//           <Sidebar />
//           <TurnTo />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

// import React from 'react';
// import Sidebar from '@/app/components/Sidebar';
// import TurnTo from '@/app/components/Turnto/page';

// const Home: React.FC = () => {
//   return (
//     <div className="relative h-screen w-screen">
//       <iframe
//         className="absolute top-0 left-0 w-full h-full border-0 z-0"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.675015531212!2d72.53763867539352!3d22.26920688528807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86e5b17a7fbb%3A0x858f4d37bbff5d3e!2sRajkot%2C%20Gujarat%20360001!5e0!3m2!1sen!2sin!4v1677046533035!5m2!1sen!2sin"
//         allowFullScreen={true}
//         loading="lazy"
//       />
//       <div className="relative flex h-full w-full z-10">
//         <Sidebar />
//         <TurnTo />
//       </div>
//     </div>
//   );
// };

// export default Home;
