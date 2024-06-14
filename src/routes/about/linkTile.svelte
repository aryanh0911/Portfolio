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
			id={data.revealId}
			class="w-full h-full p-1 overflow-hidden"
		></div>
	</div>
{/each}

<style>
	#youtube-fg {
		background-image: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/contour-crp');
		background-size: cover;
		background-position: center;
		background-color: #cf3c34;
	}
	#youtube-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/youtube_comp');
		background-size: cover;
		background-position: center bottom 20%;
	}

	#soundcloud-fg {
		background-image: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/contour-crp');
		background-size: cover;
		background-position: center 20%;
		background-color: #fb6827;
	}
	#soundcloud-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/soundcloud_comp');
		background-size: cover;
		background-position: center bottom 95%;
	}

	#spotify-fg {
		background-image: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/contour-crp');
		background-size: cover;
		background-position: center 30%;
		background-color: #25d865;
	}
	#spotify-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/spotify');
		background-size: cover;
		background-position: center bottom 95%;
	}

	#goodreads-fg {
		background-image: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/contour-crp');
		background-size: cover;
		background-position: center bottom 0%;
		background-color: #e9e5cd;
	}
	#goodreads-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/goodreads');
		background-size: cover;
		background-position: center bottom 100%;
	}
</style>
