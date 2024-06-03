<script>
	export let cardNoClass, generalClass, techStack;
	import image from '$lib/assets/work-page/oikyotaan.png';
	// import FloatingCardData from './floatingCardData'
</script>

<div class="{cardNoClass} {generalClass} card rounded-md">
	<!-- <p class="text-white">Card-1</p> -->

	<div class="card-image-container relative">
		<div class="image-overlay"></div>
		<img class="card-image" src={image} alt="" />

		<div class="text-wrapper absolute z-10 w-[95%] rounded-md">
			<div class="text-box-overlay"></div>
			<div class="text-box w-[100%] p-2 flex flex-col">
				<div class="title">
					<p class="text-[#e8edf3] font-bold">Oikyotaan'24</p>
				</div>

				<div class="date text-[#d2dbe689]">
					<p>March, 2024</p>
				</div>

				<div class="description mt-2">
					<p class="text-[#d2dbe6]">Collaborated with a team of UI/UX designers and Developers to build the official site of Oikyotaan 2024</p>
				</div>

				<div class="repo-url">
					<p class="text-[#d2dbe6] font-bold">Repository: </p>
				</div>

				<div class="techstack flex flex-wrap gap-1">
					{#each techStack as tech}
						<div class="flex justify-center items-center py-1 px-2 rounded-2xl bg-[#E3FEF7]  text-[#135D66] opacity-[0.6]">
							{tech}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		visibility: hidden;
		aspect-ratio: 5/7;
		background-color: black;
		cursor: pointer;
		width: 21rem;
		box-shadow: 10px 10px 26px black;
		overflow: hidden;
		/* position: relative; */  /* adding relative here ruins the whole grid layout below 1212px */
		@media (min-width: 1212px) {
			position: absolute;
		}

		@media (max-width: 690px) {
			width: 12rem;
		}
		@media (max-width: 390px) {
			width: 10rem;
		}
	}

	.card-1 {
		/* background-image: url('$lib/assets/about-page/prog-pfp.gif'); */
		/* background-size: cover; */

		/* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.279), rgba(0, 0, 0, 0.279)), url($lib/assets/work-page/oikyotaan.png);
        background-size: cover;
        background-position: center; */
		@media (min-width: 1212px) {			
			top: 2rem;
			left: 8rem;
		}

		@media (max-width: 1645px) {
			left: 2rem;
		}
		@media (max-width: 1450px) {
			left: 1rem;
		}
		@media (max-width: 1392px) {
			left: 0.5rem;
		}
	}

	.card-2 {
		/* background-image: url('https://cdn.vox-cdn.com/thumbor/2Af_v_XrHTP-UweyZnkg5B_fC2o=/245x0:1311x600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50875545/no_mans_sky_art.0.0.jpg'); */
		/* background-size: cover; */
		/* background-position: center; */
		@media (min-width: 1212px) {			
			top: 24.3rem;
			left: 36.5rem;
		}

		@media (max-width: 1846px) {
			left: 30rem;
		}
		@media (max-width: 1645px) {
			left: 24rem;
		}
		@media (max-width: 1450px) {
			left: 22.4rem;
		}
		@media (max-width: 1392px) {
			left: 20rem;
		}
		@media (max-width: 1250px) {
			left: 18rem;
		}
	}
	.card-3 {
		/* background-image: url('https://mixed-news.com/en/wp-content/uploads/2023/08/No-Mans-Sky-Echoes.jpg'); */
		/* background-size: cover; */
		/* background-position: center; */
		@media (min-width: 1212px) {			
			top: 3rem;
			right: 8rem;
		}

		@media (max-width: 1645px) {
			right: 2rem;
		}
		@media (max-width: 1450px) {
			right: 1rem;
		}
		@media (max-width: 1392px) {
			right: 0.5rem;
		}
	}
	.card-4 {
		/* background-image: url('https://assets1.ignimgs.com/2019/08/14/no-mans-sky---beyond-version---button-1565744905061.jpg'); */
		/* background-size: cover; */
		/* background-position: center; */
		@media (min-width: 1212px) {			
			top: 14rem;
			right: 36.5rem;
		}

		@media (max-width: 1846px) {
			right: 30rem;
		}
		@media (max-width: 1645px) {
			right: 24rem;
		}
		@media (max-width: 1450px) {
			right: 22.4rem;
		}
		@media (max-width: 1392px) {
			right: 19rem;
		}
	}
	.card-5 {
		/* background-image: url('https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/06/Saga-6e7883abba45ec557821.jpg'); */
		background-size: cover;
		background-position: center;
		@media (min-width: 1212px) {			
			top: 53.3rem;
			left: 18rem;
		}

		@media (max-width: 1392px) {
			left: 10rem;
		}
	}
	.card-6 {
		/* background-image: url('https://images.alphacoders.com/136/1360645.jpeg'); */
		/* background-size: cover; */
		/* background-position: center; */
		@media (min-width: 1212px) {			
			top: 44.3rem;
			right: 18.5rem;
		}

		@media (max-width: 1392px) {
			right: 12rem;
		}
	}

	.card-image-container {
		width: 100%;
		height: 100%;
	}

	.image-overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		width: 120%;
		background-color: rgba(0, 0, 0, 0.194);
	}

	.card-image {
        scale: 1.2;
		position: absolute;
		inset: 0;
		object-fit: cover;
		height: 100%;
		width: 100%;
		transition: scale 0.6s;
	}

	.card:hover .card-image {
		scale: 1.12;
	}

	.text-wrapper {
		@media (max-width: 690px) {
			top: 14%;
			height: 83%;
		}
		@media (max-width: 390px) {
			top: 5%;
			height: 91%;
		}
		top: 35%;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
		height: 62%;
	}

	.text-box-overlay {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: rgba(65, 65, 65, 0.283);
		backdrop-filter: blur(8px);
	}

	.title p {
		@media (max-width: 690px) {
			font-size: 1.2rem;
		}
		font-size: 1.6rem;
	}

	.description p, .date p, .repo-url p {
		@media (max-width: 690px) {
			font-size: 0.7rem;
		}
	}

	.description p {
		line-height: 1.18;
	}

	.repo-url {
		@media (max-width: 390px) {
			margin-top: 0.2rem;
		}
		
		margin-top: 0.5rem;
	}

	.techstack {
		@media (max-width: 690px) {
			font-size: 0.5rem;
		}
		@media (max-width: 390px) {
			gap: 0;
			margin-top: 0.2rem;
		}
		font-size: 0.75rem;
		margin-top: 0.85rem;
	}
</style>
