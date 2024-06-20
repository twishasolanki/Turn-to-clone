import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import Turnto from '@/app/components/Turnto/page';

const Home: React.FC = () => {
  return (
    <>
      <div
        className="flex w-full "
        style={{
          backgroundImage: "url('./assets/MAP.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Sidebar />
        <Turnto />
      </div>
    </>
  );
};

export default Home;
