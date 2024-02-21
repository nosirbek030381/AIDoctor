import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { LiaFacebook, LiaTelegramPlane } from 'react-icons/lia';
import logo from '../assets/image-1@2x.png';

const Footer = () => {
	return (
		<div>
			<footer className='bg-white	dark:bg-gray-900 '>
				<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
					<div className='sm:flex sm:items-center sm:justify-between'>
						<a href='/' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
							<img src={logo} className='h-8' alt='Flowbite Logo' />
							<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
								AI DOCTOR
							</span>
						</a>
						<ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-5'>
							<li>
								<a href='#' className='hover:text-white me-4 md:me-6'>
									<AiOutlineInstagram className='md:w-10 md:h-10 w-9 h-9' />
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white me-4 md:me-6'>
									<LiaFacebook className='md:w-10 md:h-10 w-9 h-9' />
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white me-4 md:me-6'>
									<LiaTelegramPlane className='md:w-10 md:h-10 w-9 h-9' />
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white me-4 md:me-6'>
									<AiOutlineYoutube className='md:w-10 md:h-10 w-9 h-9' />
								</a>
							</li>
						</ul>
					</div>
					<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
					<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© 2023{' '}
						<a href='#' className='hover:underline'>
							AI DOCTOR™
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
