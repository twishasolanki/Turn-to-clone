"use client"
import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import TurnTo from '@/app/components/Turnto/page';
import SimpleMap from './components/Googlemap/SimpleMap';

const Home: React.FC = () => {

  return (
    <>
      <div>
        <SimpleMap />
        <div className='flex'>
          <Sidebar />
          <TurnTo />
        </div>
      </div>
    </>
  );
};

export default Home;
