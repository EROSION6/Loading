import { useState } from 'react'
import { Logo } from '../assets/Logo'

const navigation = ['what we do', 'Case Studies', 'Insights', 'Careers']

export const Header = () => {
	const [isActive, setAcitive] = useState(0)
	return (
		<header className='fixed bg-white w-full flex justify-between items-center p-8'>
			<div className='flex items-center gap-10'>
				<Logo size={168} />
				<button className='flex items-center gap-2 px-4 rounded-full py-2 hover:bg-[#9d7ff8] transition duration-300 uppercase font-bold hover:text-white text-sm'>
					<span>🤖</span> Download AI WHITE PAPER!
				</button>
			</div>
			<div className='flex items-center gap-8'>
				<nav className='space-x-8'>
					{navigation.map((link, index) => (
						<a
							key={index}
							href='#'
							onClick={() => setAcitive(index)}
							className={`relative text-base uppercase text-[#2a2a2a]
									${isActive === index ? 'active' : ''}
								`}
						>
							{link}
						</a>
					))}
				</nav>
				<button className='uppercase py-4 px-8 bg-[#2A2A2A] text-white rounded-full font-semibold'>
					contact
				</button>
			</div>
		</header>
	)
}
