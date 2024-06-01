<script>
	import FloatingCardData from './floatingCardData.json';
    import Card from './card.svelte'
</script>

<div class="floating-cards">
	<div class="first-col-wrapper">
		<!-- <div class="card-1 card rounded-md"><p class="text-white">Card-1</p></div>
		<div class="card-3 card rounded-md"><p class="text-white">Card-3</p></div>
		<div class="card-5 card rounded-md"><p class="text-white">Card-5</p></div> -->
		{#each FloatingCardData as data}
			{#if data.id % 2 !== 0}
				<Card cardNoClass={data.cardNoClass} />
			{/if}
		{/each}
	</div>

	<div class="second-col-wrapper">
		<!-- <div class="card-2 card rounded-md"><p class="text-white">Card-2</p></div>
		<div class="card-4 card rounded-md"><p class="text-white">Card-4</p></div>
		<div class="card-6 card rounded-md"><p class="text-white">Card-6</p></div> -->
		{#each FloatingCardData as data}
			{#if data.id % 2 === 0}
				<Card />
			{/if}
		{/each}
	</div>
</div>

<style>
	.floating-cards {
		@media (max-width: 1212px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			place-content: center;
			column-gap: 0.3rem;
		}

		@media (max-width: 390px) {
			column-gap: 0;
		}
	}

	.floating-cards .card {
		visibility: hidden;
		aspect-ratio: 5/7;
		background-color: black;
		cursor: pointer;
		width: 21rem;
		box-shadow: 10px 10px 26px black;
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

	.first-col-wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.second-col-wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 21rem;

		@media (max-width: 690px) {
			margin-top: 13rem;
		}
		@media (max-width: 390px) {
			margin-top: 10rem;
		}
	}

	.card-1 {
		background-image: url('$lib/assets/about-page/prog-pfp.gif');
		background-size: cover;
		/* position: absolute; */
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
		background-image: url('https://cdn.vox-cdn.com/thumbor/2Af_v_XrHTP-UweyZnkg5B_fC2o=/245x0:1311x600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50875545/no_mans_sky_art.0.0.jpg');
		background-size: cover;
		background-position: center;

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
		background-image: url('https://mixed-news.com/en/wp-content/uploads/2023/08/No-Mans-Sky-Echoes.jpg');
		background-size: cover;
		background-position: center;

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
		background-image: url('https://assets1.ignimgs.com/2019/08/14/no-mans-sky---beyond-version---button-1565744905061.jpg');
		background-size: cover;
		background-position: center;

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
		background-image: url('https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/06/Saga-6e7883abba45ec557821.jpg');
		background-size: cover;
		background-position: center;

		@media (max-width: 1392px) {
			left: 10rem;
		}
	}
	.card-6 {
		top: 44.3rem;
		right: 18.5rem;
		background-image: url('https://images.alphacoders.com/136/1360645.jpeg');
		background-size: cover;
		background-position: center;

		@media (max-width: 1392px) {
			right: 12rem;
		}
	}
</style>
