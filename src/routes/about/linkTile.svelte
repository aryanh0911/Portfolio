<script>
	import LinkTileData from './linkTileData.json';
</script>

{#each LinkTileData as data}
	<div
		id={data.revealContainerId}
		class="w-72 h-[4.2rem] relative overflow-hidden rounded-lg cursor-pointer"
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
			<p class="text-lg text-[almostblack]">{data.name}</p>
		</div>
		<div id={data.revealId} class="w-full h-full p-1 overflow-hidden"></div>
	</div>
{/each}

<style>
	/* FONTS */
	@import url('https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=M+PLUS+Rounded+1c&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	@font-face {
		font-family: 'Poppins', sans-serif;
		src: url('../../../static/fonts/Montserrat-VariableFont_wght.ttf');
	}

	p {
		font-family: 'Poppins';
		font-weight: 600;
		letter-spacing: -0.01ch;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}

	#youtube-fg {
		background: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/contour-white'),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43));
		backdrop-filter: blur(1.4px);
		background-size: cover;
		background-position: center;
		/* color: #e72820; */
		color: rgba(255, 255, 255, 0.909);
		/* text-shadow: 0px 1px rgb(65, 65, 65); */
		text-shadow: 1px 1px #cf3c34;
		background-blend-mode: color-burn;
		/* background-color: #cf3c34; */
	}
	#youtube-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/youtube_comp');
		background-size: cover;
		background-position: center bottom 20%;
	}

	#soundcloud-fg {
		background: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/contour-white'),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43));
		backdrop-filter: blur(2px);
		background-size: cover;
		background-position: center 20%;
		/* color: #fc8552; */
		color: rgba(255, 255, 255, 0.886);
		/* text-shadow: 1px 1px black; */
		text-shadow: 1px 1px #fb6727;
		background-blend-mode: color-burn;
		/* background-color: #fb6727; */
	}
	#soundcloud-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/soundcloud_comp');
		background-size: cover;
		background-position: center bottom 95%;
	}

	#spotify-fg {
		background: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/contour-white'),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43));
		backdrop-filter: blur(2px);
		background-size: cover;
		background-position: center 30%;
		background-blend-mode: color-burn;
		/* color: #25d865; */
		color: rgba(255, 255, 255, 0.9);
		/* text-shadow: 0px 1px rgb(49, 48, 48); */
		text-shadow: 0.5px 1px #25d865;
		/* background-color: #25d865; */
	}
	#spotify-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/spotify');
		background-size: cover;
		background-position: center bottom 95%;
	}

	#goodreads-fg {
		background: url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/about-page/contour-white'),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43));
		backdrop-filter: blur(1.2px);
		background-blend-mode: color-burn;
		/* color: #e9e5cd; */
		color: rgba(255, 255, 255, 0.909);
		text-shadow: 1px 1px rgb(112, 70, 70);
		/* text-shadow: 1px 1px #e9e5cd; */
		background-size: cover;
		background-position: center bottom 0%;
		/* background-color: #e9e5cd; */
	}
	#goodreads-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/goodreads');
		background-size: cover;
		background-position: center bottom 100%;
	}
</style>
