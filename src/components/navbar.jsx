import { useState } from 'react';
import logo from '../assets/image-1@2x.png'; // Replace 'logo.png' with your logo file path
import { navItems } from '../helper';

const Navbar = () => {
	const [mobile, setMobile] = useState(false);
	const [active, setActive] = useState('Bosh Sahifa');

	const handleMobile = () => {
		setMobile(prevState => !prevState);
	};

	const handleActive = e => {
		console.log(e.target.textContent);
		setActive(e.target.textContent);
	};

	return (
		<nav className='bg-gray-800 p-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<img src={logo} alt='Logo' className='h-[70px] w-[70px]  object-fill' />
				<ul className='hidden md:flex md:space-x-6  text-xl'>
					{navItems.map(item => (
						<li key={item.path}>
							<a
								href={item.path}
								className={`text-white active:text-blue-500 hover:text-gray-300 px-5 font-[400] uppercase ${
									active == item.title ? 'text-blue-400' : ''
								}`}
								onClick={handleActive}
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
				<svg
					className='md:hidden h-6 w-6 text-white cursor-pointer'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					onClick={handleMobile}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h16m-7 6h7'
					/>
				</svg>
			</div>
			<div
				className={`md:hidden flex justify-around flex-col items-center mt-4 ${
					mobile ? '' : 'hidden'
				}`}
			>
				<div className='xs:space-x-10 space-x-5 text-lg font-normal'>
					{navItems.map(item => (
						<a key={item.path} href={item.path} className='text-white hover:text-gray-300 mb-2'>
							{item.title}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
