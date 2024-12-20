import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'
import { Expertise } from './components/Expertise'
import { FeaturedCase } from './components/FeaturedCase'
import { Header } from './components/Header'
import { LatestInsights } from './components/LatestInsights'
import { Services } from './components/Services'
import { Video } from './components/Video'

const App = () => {
	useEffect(() => {
		const scrollEl = document.querySelector('#main')

		const locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1,
			smoothTouch: 0.1,
			class: 'is-reveal',
			offset: 100,
			scrollSensitivity: 20,
			scrollingEasing: 'easeInOutQuint',
			updateOnBrowserResize: true,
			updateOnDeviceOrientation: true,
			updateOnMobile: true,
			updateOnInteraction: true,
			inertia: 0.5,
			resetScrollPosition: false,
			interactivity: {
				pointer: true,
				keyboard: true,
				touch: true,
				scroll: true,
			},
			destroyOnDestroy: true,
			scrollContainer: null,
		})

		locoScroll.update()

		return () => {
			locoScroll.destroy()
		}
	}, [])

	return (
		<div id='main' className='w-full h-full'>
			<Header />
			<Video />
			<Expertise />
			<FeaturedCase />
			<Services />
			<LatestInsights />
			
		</div>
	)
}

export default App
