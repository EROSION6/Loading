import { BsArrowRight } from 'react-icons/bs'

export const Expertise = () => {
	return (
		<div className='mt-[2vw] p-8'>
			<a
				href='#'
				className='flex items-center gap-2 text-[#2a2a2a] uppercase text-lg'
			>
				<BsArrowRight />
				Our Expertise
			</a>

			<div className='mt-10'>
				<h1 className='w-2/3 text-[#2a2a2a] text-5xl mb-10'>
					Our teams of multi-disciplinary experts work with you to collaborate,
					deliver and scale digital change across...
				</h1>

				<div>
					<Card />
				</div>
			</div>
		</div>
	)
}

const Card = () => (
	<div className='w-[560px] rounded-md overflow-hidden  transition duration-300 hover:-translate-y-2 cursor-pointer'>
		<img
			src='https://cdn.prod.website-files.com/63d00abf666043b18fed42fa/66a0f712eae157830c087a6c_Mask%20group%402x-2-min-p-500.avif'
			alt='card'
			className='w-full h-full object-cover'
		/>
		<div className='mt-7'>
			<h2 className='text-[#2a2a2a] text-4xl'>Digital Products & Services</h2>
			<p className='text-[#616161] text-[21px]'>
				Designed to accelerate business growth and improve customer engagement.
			</p>
		</div>

		<button className='p-2 bg-[#2a2a2a] rounded-full mt-5'>
			<BsArrowRight color='white'/>
		</button>
	</div>
)


