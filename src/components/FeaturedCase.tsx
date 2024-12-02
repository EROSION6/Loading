import { BsArrowRight } from 'react-icons/bs'

export const FeaturedCase = () => {
	return (
		<div className='w-full flex gap-20 mt-[2vw] p-8 border-b border-[#2a2a2a] pb-14'>
			<div className='w-[35rem] leading-[50px]'>
				<a
					href='#'
					className='flex items-center gap-2 text-[#2a2a2a] uppercase text-lg'
				>
					<BsArrowRight />
					FEATURED CASE STUDY
				</a>

				<div>
					<h2 className='text-2xl text-[#616161] mt-24'>Chatloop</h2>
					<p className='text-[42px] text-[#2a2a2a] mt-8'>
						Reinventing web browsing with an innovative social media platform
					</p>

					<div className='pl-5 space-x-10 mt-5'>
						<button>Experience Design </button>
						<button>Software Engineering</button>
					</div>
				</div>
			</div>
			<div className='flex-1'>
				<img
					src='https://cdn.prod.website-files.com/63d00abf666043b18fed42fa/64c1122d94ffd68abe290bf0_CL%20Thumbnail%20(4_3)%403x-min.avif'
					alt='image'
					className='rounded-xl'
				/>
			</div>
		</div>
	)
}
