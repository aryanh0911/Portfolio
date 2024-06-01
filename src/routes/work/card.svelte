<script>
	export let cardNoClass, generalClass;
	import image from '$lib/assets/work-page/oikyotaan.png';
</script>

<div class="{cardNoClass} {generalClass} card rounded-md">
	<!-- <p class="text-white">Card-1</p> -->
	<div class="card-image-container">
		<div class="image-overlay"></div>
		<img class="card-image" src={image} alt="" />
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
		position: relative;
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
		top: 2rem;
		left: 8rem;

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
		top: 24.3rem;
		left: 36.5rem;
		/* background-image: url('https://cdn.vox-cdn.com/thumbor/2Af_v_XrHTP-UweyZnkg5B_fC2o=/245x0:1311x600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50875545/no_mans_sky_art.0.0.jpg'); */
		/* background-size: cover; */
		/* background-position: center; */

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
		top: 3rem;
		right: 8rem;
		/* background-image: url('https://mixed-news.com/en/wp-content/uploads/2023/08/No-Mans-Sky-Echoes.jpg'); */
		/* background-size: cover; */
		/* background-position: center; */

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
		top: 14rem;
		right: 36.5rem;
		/* background-image: url('https://assets1.ignimgs.com/2019/08/14/no-mans-sky---beyond-version---button-1565744905061.jpg'); */
		/* background-size: cover; */
		/* background-position: center; */

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
		top: 53.3rem;
		left: 18rem;
		/* background-image: url('https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/06/Saga-6e7883abba45ec557821.jpg'); */
		background-size: cover;
		background-position: center;

		@media (max-width: 1392px) {
			left: 10rem;
		}
	}
	.card-6 {
		top: 44.3rem;
		right: 18.5rem;
		/* background-image: url('https://images.alphacoders.com/136/1360645.jpeg'); */
		/* background-size: cover; */
		/* background-position: center; */

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
		background-color: rgba(0, 0, 0, 0.32);
	}

	.card-image {
		/* scale: 1.1;
		height: inherit;
		object-fit: cover; */
        scale: 1.1;
		position: absolute;
		inset: 0;
		object-fit: cover;
		height: 100%;
		width: 100%;
		transition: scale 0.6s;
	}

	.card:hover .card-image {
		scale: 1.05;
	}
</style>
