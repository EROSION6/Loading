export const Video = () => {
	return (
		<main className='pt-[14vw]'>
			<h1 className='text-[#2a2a2a] text-[133px] leading-[150px] p-8'>
				Leading <br />
				Digital Innovation
			</h1>

			<video
				width='100%'
				height='100%'
				src='https://cdn.prod.website-files.com/63cfc7e8a69afe29ecfa79a5/64f5f63d4006834d4d2192b3_parallax_sizzle_1%20(720p)-transcode.mp4'
				controls={false}
				autoPlay
				style={{ borderRadius: '24px' }}
			/>
		</main>
	)
}
