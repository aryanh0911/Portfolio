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
			// scrollTrigger:{
			// 	trigger: '#para',
			// 	markers: true,
			// 	scrub: 1,
			// 	start: 'top 20%',
			// 	end: 'top 20%',
			// 	pin: true
			// }
		});
	});
</script>

<section>
	<Cover on:click={navToHome} />
	<main class="flex gap-4 flex-wrap justify-center mt-28 md:mt-32">
		<Paragraph />
		<div id="right-pane" class="">
			<div class="container flex flex-col gap-4">
				<!--YouTube-->
				<div
					id="yt-reveal-container"
					class="w-72 h-20 relative overflow-hidden rounded-lg cursor-pointer"
				>
					<div
						class="absolute w-full h-full bg-[#f43b3b] hover:opacity-0 duration-500 p-1 flex justify-center items-center"
					>
						<p class="text-lg font-bold text-[white]">YouTube</p>
					</div>

					<div id="youtube-reveal" class="w-full h-full p-1"></div>
				</div>
			</div>
		</div>
	</main>
</section>

<style>
	#youtube-reveal {
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.573)),
			url('$lib/assets/about-page/youtube.png');
		background-size: cover;
		background-position: center bottom 20%;
	}

	#yt-reveal-container {
	}
</style>
