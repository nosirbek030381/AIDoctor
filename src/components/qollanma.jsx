const Manual = () => {
	return (
		<div
			className='relative mt-10 flex flex-1 flex-col justify-center items-center space-y-10'
			id='manual'
		>
			<h1 className='text-4xl md:text-6xl font-semibold'>Qo&apos;llanma</h1>
			<div>
				<iframe
					className='lg:w-[1280px] lg:h-[700px] md:w-[560px] md:h-[316px] w-[450px] h-[300px] rounded-lg shadow-lg'
					src='https://www.youtube-nocookie.com/embed/mCw9h0jIuqk?si=ZV9l85QBPpZyLJMr'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default Manual;
