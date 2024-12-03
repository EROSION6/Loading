import { BsArrowRight } from 'react-icons/bs'

export const LatestInsights = () => {
	return (
		<div className='w-full flex gap-5 mt-16 p-8'>
			<div className='w-[40rem]'>
				<h2 className='text-[54px] text-[#2A2A2A]'>Latest Insights</h2>
				<p className='text-xl text-[#616161] mt-4 w-[30rem]'>
					Insights, best practices, and thought-provoking discussions on how
					digital is shaping the future of business.
				</p>
				<button className='uppercase py-6 px-8 bg-[#2A2A2A] text-white rounded-full font-semibold mt-8'>
					View all Insights
				</button>
			</div>

			<div className='w-full flex-1'>
				<Card />
			</div>
		</div>
	)
}

const Card = () => (
	<div className='w-full flex gap-10 border-b border-[#2a2a2a] pb-8 items-center'>
		<div className='w-72 overflow-hidden rounded-lg '>
			<img
				src='https://cdn.prod.website-files.com/63d00abf666043b18fed42fa/673727d6b5a7fc5374917e2d_Voice%20AI%20Blog%20Thumbnail-min-p-500.jpg'
				alt='image'
				className='w-full h-full rounded-lg transition-transform duration-300 hover:scale-105'
			/>
		</div>
		<div>
			<h2 className='text-4xl text-[#2A2A2A]'>
				Why AI-Powered Voice Agents are Changing Customer Service
			</h2>
			<div className='flex items-center gap-3 mt-5'>
				<span className='text-lg text-[#434343] font-bold uppercase'>
					18.11.2024
				</span>
				<span className='text-lg text-[#434343] font-bold uppercase'>
					insights
				</span>
			</div>
		</div>
		<button>
			<BsArrowRight />
		</button>
	</div>
)
