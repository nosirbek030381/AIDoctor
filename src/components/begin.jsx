import { Link } from 'react-router-dom';
import { cards } from '../helper';

const Begin = () => {
	// const [isModalOpen, setIsModalOpen] = useState(false);
	// const [selectedFiles, setSelectedFiles] = useState([]);

	// const openModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };

	// const handleFileChange = e => {
	// 	const files = Array.from(e.target.files);
	// 	setSelectedFiles(files);
	// };

	// const handleUpload = () => {
	// 	console.log(selectedFiles);
	// 	closeModal();
	// };

	return (
		<div className=''>
			<div
				id='begin'
				className={`w-full bg-[url('./assets/background.svg')] justify-center items-center flex flex-1 flex-col md:flex-row relative flex-wrap space-x-5 `}
			>
				{cards.map(card => (
					<div
						key={card.id}
						className='relative  flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 rounded-br-[50px] justify-center mb-7'
					>
						<div className='p-6'>
							<img
								src={card.image}
								alt={card.title}
								className='w-full h-60 object-cover rounded-lg mb-4'
							/>
							<h5 className='block  mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
								{card.title}
							</h5>
						</div>
						<div className='p-6 pt-0'>
							<Link to={card.url} target={card.target}>
								<button
									className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
									type='button'
								>
									Yuklash
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
			{/* {isModalOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
					<div className='relative w-auto max-w-3xl mx-auto my-6'>
						<div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
							<div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
								<h3 className='text-3xl font-semibold'>Faylni yuklash</h3>
								<button
									className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
									onClick={closeModal}
								>
									<span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
										×
									</span>
								</button>
							</div>
							<div className='relative p-6 flex-auto'>
								<label
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									htmlFor='multiple_files'
								>
									Rasm yuklash
								</label>
								<input
									className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
									id='multiple_files'
									type='file'
									placeholder='rasm yuklash'
									multiple
									onChange={handleFileChange}
								/>
							</div>
							<div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
								<button
									className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									type='button'
									onClick={handleUpload}
								>
									Yuklash
								</button>
							</div>
						</div>
					</div>
				</div>
			)} */}
			{/* {isModalOpen && <div className='fixed inset-0 z-40 bg-black opacity-25'></div>} */}
		</div>
	);
};

export default Begin;
