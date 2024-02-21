import Rabot from '../assets/image-5@2x.png';

const MainSection = () => {
	return (
		<div className="h-screen md:h-[90vh] flex flex-col md:flex-row  px-6 md:px-30 items-center bg-[url('./assets/bac.svg')]">
			<div className='text-white md:w-full text-4xl md:text-6xl mt-6 text-center md:text-start ml-[70px]'>
				<h2 className='uppercase font-bold'>MEDAI</h2>
				<br />
				<p className='md:text-2xl text-xl'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ut possimus labore
					molestias distinctio assumenda.
				</p>
			</div>
			<div className='mt-[120px] md:mt-0 w-full mr-[200px]'>
				<img src={Rabot} alt='robot' className='object-cover w-full md:w-auto h-full' />
			</div>
		</div>
	);
};

export default MainSection;
