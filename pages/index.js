import Layout from '../components/Layout';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Page1 from '../components/Landing/Page1';
import VideoManager from '../components/Landing/VideoManager';

import ActivitiesWrapper from '../components/Activities/ActivitesWrapper';



export default function Home() {
	const [shouldPlay, setShouldPlay] = useState(true);
	if (shouldPlay) return <VideoManager setShouldPlay={setShouldPlay} />;
	return (
		<Layout title={'Orientation 2023'} homePage={true}>
			<div>
				<Page1 />
				{/* <Navbar global={false} /> */}
				<div className='h-screen bg-yellow-300 p-8'>
					<ActivitiesWrapper />
					{/* Activites section */}


			{/* Activites section end*/}

				</div>
				{/* <div className='h-screen bg-blue-600'></div> */}
			</div>
		</Layout>
	);
}
