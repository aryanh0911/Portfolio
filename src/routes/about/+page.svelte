<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// ---Components---
	import Cover from './cover.svelte';
	import Paragraph from './paragraph.svelte';

	function navToHome() {
		window.location.href = '/';
	}

	// ---GSAP---
	onMount(() => {
		const tl = gsap.timeline({
			onStart: () => {
				document.querySelector('#cover-page').style.visibility = 'visible';
				document.querySelector('#para').style.visibility = 'visible';
				document.querySelector('#pfp').style.visibility = 'visible';
				document.querySelector('#right-pane').style.visibility = 'visible';
			}
		});

		tl.from('#cover-page', {
			opacity: 0,
			y: 30,
			duration: 0.4
		});

		tl.from('#pfp', {
			opacity: 0
		});

		tl.from('#para', {
			y: 20,
			opacity: 0
		});

		tl.from(
			'#yt-reveal-container, #soundcloud-reveal-container, #spotify-reveal-container, #goodreads-reveal-container',
			{
				y: 20,
				x: 5,
				opacity: 0,
				stagger: { each: 0.15, from: 'start' }
			}
		);

		//Match Media GSAP
		let mm = gsap.matchMedia();

		mm.add('(max-width:767px)', () => {
			let tl2 = gsap.timeline();

			tl2.from(
				'#yt-reveal-container, #soundcloud-reveal-container, #spotify-reveal-container, #goodreads-reveal-container',
				{
					y: 20,
					x: 5,
					opacity: 0,
					stagger: { each: 0.15, from: 'start' },
					scrollTrigger: {
						trigger: '#right-pane',
						scrub: 1,
						// markers: true,
						start: 'top 80%',
						end: 'bottom bottom',
						ease: 'power3.out'
					}
				}
			);
		});
	});
</script>

<section>
	<Cover on:click={navToHome} />
	<main class="flex gap-4 flex-wrap justify-center mt-28 md:mt-32">
		<Paragraph />
		<div id="right-pane" class="mt-auto mb-auto">
			<div class="container flex flex-col gap-4">
				<!--YouTube-->
				<div
					id="yt-reveal-container"
					class="w-72 h-20 relative overflow-hidden rounded-lg cursor-pointer"
					on:click={() =>
						setTimeout(() => {
							window.open('https://www.youtube.com/aryan-hazarika', '_blank');
						}, 700)}
				>
					<div
						id="yt-fg"
						class="absolute w-full h-full bg-[#cf3c34] hover:opacity-0 duration-500 p-1 flex justify-center items-center"
					>
						<p class="text-lg font-bold text-[almostblack]">YouTube</p>
					</div>
					<div id="youtube-reveal" class="w-full h-full p-1 overflow-hidden"></div>
				</div>

				<!--SoundCloud-->
				<div
					id="soundcloud-reveal-container"
					class="w-72 h-20 relative overflow-hidden rounded-xl cursor-pointer"
					on:click={() =>
						setTimeout(() => {
							window.open('https://www.youtube.com/aryan-hazarika', '_blank');
						}, 700)}
				>
					<div
						id="soundcloud-fg"
						class="absolute w-full h-full bg-[#fb6827] hover:opacity-0 duration-500 p-1 flex justify-center items-center"
					>
						<p class="text-lg font-bold">SounCloud</p>
					</div>
					<div id="soundcloud-reveal" class="w-full h-full p-1"></div>
				</div>

				<!--Spotify-->
				<div
					id="spotify-reveal-container"
					class="w-72 h-20 relative overflow-hidden rounded-xl cursor-pointer"
					on:click={() =>
						setTimeout(() => {
							window.open('https://www.youtube.com/aryan-hazarika', '_blank');
						}, 700)}
				>
					<div
						id="spotify-fg"
						class="absolute w-full h-full bg-[#25d865] hover:opacity-0 duration-500 p-1 flex justify-center items-center"
					>
						<p class="text-lg font-bold text">Spotify</p>
					</div>
					<div id="spotify-reveal" class="w-full h-full p-1"></div>
				</div>

				<!--Goodreads-->
				<div
					id="goodreads-reveal-container"
					class="w-72 h-20 relative overflow-hidden rounded-xl cursor-pointer"
					on:click={() =>
						setTimeout(() => {
							window.open('https://www.youtube.com/aryan-hazarika', '_blank');
						}, 700)}
				>
					<div
						id="goodreads-fg"
						class="absolute w-full h-full bg-[#e9e5cd] hover:opacity-0 duration-500 p-1 flex justify-center items-center"
					>
						<p class="text-lg font-bold">Goodreads</p>
					</div>
					<div id="goodreads-reveal" class="w-full h-full p-1"></div>
				</div>
			</div>
		</div>
	</main>
</section>

<style>
	#right-pane {
		visibility: hidden;
	}

	#yt-fg {
		background-image: url('$lib/assets/about-page/contour-crp.png');
		background-size: cover;
		background-position: center;
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
	}
	#goodreads-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('$lib/assets/about-page/goodreads.png');
		background-size: cover;
		background-position: center bottom 100%;
	}
</style>
