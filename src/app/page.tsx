// "use client"
// import React from 'react';
// import Sidebar from '@/app/components/Sidebar';
// import TurnTo from '@/app/components/Turnto/page';
// import Drawercard from './components/Drawer';
// import SimpleMap from './components/Googlemap/SimpleMap';
// import ProfileCard from './components/ProfileCard';

// interface SimpleMapProps {
//   onBackClick: () => void;
//   onBackDrawerClick: () => void;
//   title: string;
//   text: string;
//   url: string;
//   onOpenDrawer: () => void;
// }
// const Home: React.FC = () => {

//   return (
//     <>
//       <div>
//         <SimpleMap onBackClick="onBackClick" onBackDrawerClick="onBackDrawerClick" title="title" text="text" url="url" onOpenDrawer="onOpenDrawer" />
//         <div>
//           <div className='flex'>
//             <Sidebar />
//             <div className='flex flex-col'>
//               <div >
//                 <TurnTo />
//               </div>
//               <div className='md:block hidden'>
//                 <ProfileCard />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=' md:hidden block'>
//           <Drawercard />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;	




'use client'
import { useState } from "react";
import SimpleMap from "./components/Googlemap/SimpleMap";
import Sidebar from "./components/Sidebar";
import TurnTo from "./components/Turnto/page";
import Drawercard from "./components/Drawer";
import CustomCard from "./components/CustomCard";

export default function Home() {

  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedItemcard, setSelectedItemcard] = useState<number | null>(null);

  return (
    <>
      <SimpleMap
        setSelectedItemcard={setSelectedItemcard}
        selectedItemcard={selectedItemcard}
        isOpen={isOpen}
        onBackClick={() => {
          if (selectedItemcard !== null) {
            setSelectedItemcard(null);
            setOpen(true);
          }
        }}
        onClick={() => setOpen(false)}
      />
      
      <div className="flex z-50">
        <Sidebar />
        <TurnTo />
        <Drawercard
          setOpen={setOpen}
          setSelectedItemcard={setSelectedItemcard}
          selectedItemcard={selectedItemcard}
          isOpen={isOpen}
          onBackClick={() => setSelectedItemcard(null)}
          onClick={() => setOpen(false)}
          onBackDrawerClick={() => setOpen(true)}
          
        />

        {selectedItemcard && (
          <CustomCard
            onBackClick={() => setSelectedItemcard(null)}
            onClick={() => setOpen(false)}
            onBackDrawerClick={() => setOpen(true)}
          />
        )}
      </div>
    </>
  );
}
