import Image from 'next/image';
import Logo from './Logo';
import { TimerContainer } from './TimerContainer';

const Page1 = () => {
	return (
		<div className='text-white h-[calc(100vh-4rem)] relative z-10 flex flex-col items-center justify-evenly'>
			<div className='flex flex-col-reverse  md:flex-row items-center w-full justify-evenly font-mont'>
				<div className='flex flex-col gap-2'>
					<div>
						<div className='text-xl font-extrabold font-latoLight flex items-center gap-1 '>
							<div className='w-7 aspect-1 relative text-white'>
								<Image src='/calendar.png' layout='fill' alt='' className='invert' />
							</div>
							<div>
								5<sup className='text-xs'>th</sup> - 9<sup className='text-xs'>th</sup> September 2023
							</div>
						</div>
						<div className='text-xl font-extrabold  font-latoLight my-2 flex items-center gap-1'>
							<div className='w-7 aspect-1 relative text-white'>
								<Image src='/location.png' layout='fill' alt='' className='invert' />
							</div>
							NUST H12, Islamabad
						</div>
					</div>
					<div className='z-20 font-latoBold max-w-3xl text-4xl md:text-6xl lg:text-8xl mt-2 mb-3'>
						Welcome to Orientation &apos;23
					</div>
					<div className='max-w-3xl text-base font-semibol md:text-xl text-justify font-latoRegular'>
						Welcome to the NUST Orientation! Our dynamic orientation program is designed to provide you with
						a seamless transition into university life. With the support of our passionate orientation
						guides and dedicated team, you&apos;ll discover the essence of NUST&apos;s academic excellence,
						diverse campus life, and the strong sense of community that awaits you. Get ready for an
						experience of a lifetime. We wish you the best of luck!
					</div>
				</div>
				<div className='flex flex-col gap-8 items-center justify-end h-full'>
					<Logo />
					<div className='relative inline-block'>
						<span className='relative text-white p-1 '>
							<span className='font-aspectRange tracking-[-0.15em] font-semibold text-4xl md:text-3xl xl:text-5xl'>
								O N
							</span>
							<span className='font-goodnightLondonScript font-medium text-6xl md:text-5xl xl:text-7xl relative -bottom-2'>
								{' '}
								to the stars
							</span>
						</span>
					</div>
				</div>
			</div>
			<TimerContainer />
		</div>
	);
};

export default Page1;
