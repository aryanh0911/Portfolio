<script>
	import LinkTileData from './linkTileData.json';
</script>

{#each LinkTileData as data}
	<div
		id={data.revealContainerId}
		class="w-72 h-20 relative overflow-hidden rounded-lg cursor-pointer"
		tabindex="0"
		on:click={() =>
			setTimeout(() => {
				window.open(data.link, '_blank');
			}, 700)}
		on:keydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				setTimeout(() => {
					window.open(data.link, '_blank');
				}, 700);
			}
		}}
	>
		<div
			id={data.foregroundId}
			class="absolute w-full h-full hover:opacity-0 duration-500 p-1 flex justify-center items-center"
		>
			<p class="text-lg font-bold text-[almostblack]">{data.name}</p>
		</div>
		<div
			id={data.id === 1
				? 'youtube-reveal'
				: data.id === 2
					? 'soundcloud-reveal'
					: data.id === 3
						? 'spotify-reveal'
						: data.id === 4
							? 'goodreads-reveal'
							: ' '}
			class="w-full h-full p-1 overflow-hidden"
		></div>
	</div>
{/each}

<style>
	#youtube-fg {
		background-image: url('$lib/assets/about-page/contour-crp.png');
		background-size: cover;
		background-position: center;
		background-color: #cf3c34;
	}
	#youtube-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('$lib/assets/about-page/youtube.png');
		background-size: cover;
		background-position: center bottom 20%;
	}

	#soundcloud-fg {
		background-image: url('$lib/assets/about-page/contour-crp.png');
		background-size: cover;
		background-position: center 20%;
		background-color: #fb6827;
	}
	#soundcloud-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('$lib/assets/about-page/soundcloud.png');
		background-size: cover;
		background-position: center bottom 95%;
	}

	#spotify-fg {
		background-image: url('$lib/assets/about-page/contour-crp.png');
		background-size: cover;
		background-position: center 30%;
		background-color: #25d865;
	}
	#spotify-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('$lib/assets/about-page/spotify.png');
		background-size: cover;
		background-position: center bottom 95%;
	}

	#goodreads-fg {
		background-image: url('$lib/assets/about-page/contour-crp.png');
		background-size: cover;
		background-position: center bottom 0%;
		background-color: #e9e5cd;
	}
	#goodreads-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('$lib/assets/about-page/goodreads.png');
		background-size: cover;
		background-position: center bottom 100%;
	}
</style>
