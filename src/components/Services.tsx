import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

interface IServicesCard {
	isHover: boolean
	setHover: (value: boolean) => void
}

export const Services = () => {
	const [isHover, setHover] = useState(false)

	return (
		<div className='w-full'>
			<Card isHover={isHover} setHover={setHover} />
		</div>
	)
}

const Card = ({ isHover, setHover }: IServicesCard) => (
	<div
		className='w-full flex justify-between bg-[#2A2A2A] px-20 py-20 border-b border-[#373636] cursor-pointer'
		style={{
			background: !isHover
				? '#2A2A2A'
				: 'url(https://cdn.prod.website-files.com/63d00abf666043b18fed42fa/643e7177e5cb554f0586299f_SA-min.avif) no-repeat center / cover',
			transition: 'all .4s ease',
		}}
		onMouseEnter={() => setHover(true)}
		onMouseLeave={() => setHover(false)}
	>
		<div>
			<a
				href='#'
				className='flex items-center gap-2 text-white uppercase text-lg'
			>
				<BsArrowRight />
				What we do
			</a>
		</div>

		<div className='w-[60%] space-y-10'>
			<p className='text-white text-4xl leading-[50px]'>
				We deliver impactful solutions across four key service areas. These
				include Digital & Product Strategy, Experience Design, Software
				Engineering and End-to-End Agile Delivery.
			</p>
			<p className={`${!isHover ? 'text-[#a0a0a0]' : 'text-white'} text-2xl`}>
				Our goal is to solve user problems by using a tailored and innovative
				approach that ultimately helps our clients achieve their objectives.
			</p>
		</div>
	</div>
)
// https://parall.ax
