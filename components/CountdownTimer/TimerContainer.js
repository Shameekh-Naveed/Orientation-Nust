// import React from "react";
// import { NumberBox } from "./NumberBox";
//
export const TimerContainer = ({ days, hours, minutes, seconds }) => (
	<div className='grid grid-flow-col gap-1 text-center auto-cols-max absolute bottom-20 lg:left-0 left:1/2 m-4'>
		<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm text-neutral-content'>
			<span className='countdown font-mono text-4xl'>
				<span style={{ '--value': days }}></span>
			</span>
			days
		</div>
		<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm text-neutral-content'>
			<span className='countdown font-mono text-4xl'>
				<span style={{ '--value': hours }}></span>
			</span>
			hours
		</div>
		<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm  text-neutral-content'>
			<span className='countdown font-mono text-4xl'>
				<span style={{ '--value': minutes }}></span>
			</span>
			min
		</div>
		<div className='flex flex-col p-2 bg-[#3F2073] rounded-sm  text-neutral-content'>
			<span className='countdown font-mono text-4xl'>
				<span style={{ '--value': seconds }}></span>
			</span>
			sec
		</div>
	</div>
);
//   let daysFlip = false;
//   let hoursFlip = false;
//   let minutesFlip = false;
//   let secondsFlip = true;
//   if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
//     daysFlip = false;
//     hoursFlip = false;
//     minutesFlip = false;
//     secondsFlip = false;
//   }
//
//   if (seconds == 0) {
//     if (minutes != 0) {
//       seconds = 59;
//     }
//
//     secondsFlip = false;
//     minutesFlip = true;
//   }
//   if (minutes == 0) {
//     if (hours != 0) {
//       minutes = 59;
//     }
//
//     minutesFlip = false;
//     hoursFlip = true;
//   }
//
//   if (hours == 0) {
//     hoursFlip = false;
//     if (days != 0) {
//       daysFlip = true;
//     }
//   }
//
//   if (days < 10) {
//     days = "0" + days;
//   }
//
//   if (hours < 10) {
//     hours = "0" + hours;
//   }
//
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//
//   return (
//     <div className=" mt-2 md:mt-20  rounded-xl">
//       <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
//         <NumberBox num={days} unit="Days" flip={daysFlip} />
//         <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
//           :
//         </span>
//         <NumberBox num={hours} unit="Hours" flip={hoursFlip} />
//         <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
//           :
//         </span>
//         <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />
//         <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
//           :
//         </span>
//         <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
//       </div>
//     </div>
//   );
// };
