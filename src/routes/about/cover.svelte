<script>
	import pfp1 from '$lib/assets/about-page/pfp1.jpeg';
</script>

<section>
	<div id="cover-page" class="w-full h-[8rem] bg-center lg:h-[12rem]">
		<div id="back-btn" on:click class="pl-6 pt-4 w-fit cursor-pointer">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="2rem"
				height="2rem"
				fill="white"
				><path
					d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
				></path></svg
			>
		</div>

		<div id="pfp" class="absolute right-[30%] top-[50%] md:right-[20%] md:top-[50%] lg:top-[65%]">
			<img id="pfp-img" src={pfp1} alt="" class="" />
		</div>
	</div>
</section>

<style>
	#cover-page {
		background-image: url('$lib/assets/about-page/vinyl.gif');
		background-size: cover;
		position: relative;
		visibility: hidden;
	}

	#pfp img {
		width: 8rem;
		border: 2px solid #b1b1af;
		padding: 3px;
		border-radius: 50%;
		box-shadow: 4px 4px 20px black;
	}
</style>
