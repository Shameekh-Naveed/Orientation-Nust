import React from 'react';
import Image from 'next/image';
import MeetOurTeam from './MeetOurTeam';
import ECCards from './ECCards';
import Wing from './Wing';
import { opswing, mediawing, reswing,coorwing, outwing, presiwing } from './data';

export default function EC() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center'>
        <div className="text-center lg:text-7xl md:text-6xl text-5xl mb-8 font-heading font-bold my-4 md:mb-20 md:mt-6 text-tyrian-purple dark:text-pale-pink">
          <MeetOurTeam placeholderText={[{ type: "heading1", text: "Meet Our Team" }]} />
        </div>
      </div>

     <ECCards />



      <div className="w-full justify-center pt-16 pb-80 mt-16 bg-[#602042] dark:bg-gray-800">
        <div className="justify-center text-center flex-col pt-6">
          <span className="font-sans font-bold text-white text-5xl md:text-6xl ">Directorate</span>

          <div className="grid md:grid-cols-2 gap-10 mt-20 justify-center"> {/* Display two wings per row on desktop */}
            <div className="flex flex-col md:pb-0 pb-20 items-center">
              <h2 className="font-subHeading font-semibold text-center text-white md:text-3xl text-2xl md:mb-40 mb-20">Operations Wing</h2>
              <Wing cards={opswing} />
            </div>

            <div className="flex flex-col pb-20 items-center ">
              <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-3xl text-2xl md:mt-0 mt-60 md:mb-40 mb-20">Presidential Wing</h2>
              <Wing cards={presiwing} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-20 justify-center"> {/* Display two wings per row on desktop */}
            <div className="flex flex-col pb-20 items-center">
              <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-3xl text-2xl md:mt-80 mt-60 md:mb-40 mb-20">Coordination Wing</h2>
              <Wing cards={coorwing} />
            </div>

            <div className="flex flex-col md:pb-0 pb-20 items-center">
              <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-3xl text-2xl md:mt-80 mt-60 md md:mb-40 mb-20">Media Wing</h2>
              <Wing cards={mediawing} />
            </div>
            <div className="flex flex-col md:pb-0 pb-20 items-center">
            <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-3xl text-2xl md:mt-80 mt-60 md md:mb-40 mb-20">Outreach Wing</h2>
            <Wing cards={outwing} />
          </div>
          <div className="flex flex-col md:pb-40 pb-20 items-center">
          <h2 className="font-subHeading font-semibold text-center justify-center text-white md:text-3xl text-2xl md:mt-80 mt-60 md md:mb-40 mb-20">Resources Wing</h2>
          <Wing cards={reswing} />
        </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
