<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// ---Components---
	import Cover from './cover.svelte';
	import Paragraph from './paragraph.svelte';
	import LinkTile from './linkTile.svelte';

	// ---GSAP---
	onMount(() => {
		let mm = gsap.matchMedia();
		mm.add(
			{
				isTablet: '(max-width: 520px)',
				isDesktop: '(min-width: 425px)'
			},
			(context) => {
				let { isTablet } = context.conditions;

				const tl = gsap.timeline({
					onStart: () => {
						gsap.set(['#cover-page', '#para', '#pfp', '#right-pane'], { visibility: 'visible' });
					}
				});

				tl.from('#cover-page', {
					opacity: 0,
					y: 30,
					duration: 0.3
				})
					.from('#pfp', {
						opacity: 0,
						duration: 0.3
					})
					.from('#para', {
						y: 20,
						opacity: 0,
						duration: 0.5
					})
					.from('#right-pane', {
						opacity: 0,
						y: 20,
						duration: 0.4
					});

				const staggerAnimation = {
					y: 20,
					x: 5,
					opacity: 0,
					stagger: { each: 0.15, from: 'start' },
					duration: 0.3
				};

				if (isTablet) {
					staggerAnimation.scrollTrigger = {
						trigger: '#right-pane',
						scrub: 2,
						// markers: true,
						start: 'top 87%',
						end: 'bottom bottom'
					};
				}

				tl.from(
					'#youtube-reveal-container, #soundcloud-reveal-container, #spotify-reveal-container, #goodreads-reveal-container',
					staggerAnimation
				);
			}
		);
	});
</script>

<section>
	<Cover
		on:click={() => {
			window.location.href = '/';
		}}
	/>
	<main class="flex gap-4 flex-wrap justify-center mt-28 md:mt-32">
		<Paragraph />
		<div id="right-pane" class="mt-auto mb-auto">
			<div class="container flex flex-col gap-4">
				<LinkTile />
			</div>
		</div>
	</main>
</section>

<style>
	#right-pane {
		visibility: hidden;
	}
</style>
