<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// Components
	import Charizard from './charizard-card.svelte';
	import Bulbasaur from './bulbasaur-card.svelte';
	import Mewtwo from './mewtwo-card.svelte';
	import Lugia from './lugia-card.svelte';

	let cardGroupHovered = false;
	let charizardCardHovered = false;
	let bulbasaurCardHovered = false;
	let mewtwoCardHovered = false;
	let lugiaCardHovered = false;

	// import { fade } from 'svelte/transition';
	// let pageTransition = 0;

	function navToAbout() {
		window.location.href = '/about';
		// pageTransition = !pageTransition;
	}

	function navToContact() {
		window.location.href = '/contact';
	}

	function navToWork() {
		window.location.href = '/work';
	}

	// GSAP
	onMount(() => {
		gsap.set('*', { visibility: 'visible' });
		let mm = gsap.matchMedia();
		mm.add(
			{
				isDesktop: '',
				isTablet: '(max-width: 790px)',
				isMobile: ''
			},
			(context) => {
				let { isDesktop, isTablet, isMobile } = context.conditions;

				if (isTablet) {
					const tl = gsap.timeline({
						onStart: () => {}
					});

					//---Big Cards---
					gsap.to('#card-1', {
						x: '-75%',
						y: '16%',
						rotate: -24,
						duration: 0.2,
						delay: 0.5
					})
					gsap.to('#card-2', {
						x: '-2%',
						y: '0%',
						rotate: 3,
						duration: 0.2,
						delay: 0.5
					})
					gsap.to('#card-3', {
						x: '75%',
						y: '16%',
						rotate: 24,
						duration: 0.2,
						delay: 0.5
					})

					//---Small Cards---
					gsap.fromTo('#charizard',{opacity: 0}, {
						opacity: .7,
						x: '240%',
						y: '-180%',
						rotate: -15,
						duration: 0.15,
						delay: 1.2,
					})
					gsap.fromTo('#bulbasaur',{opacity: 0}, {
						opacity: 0.7,
						x: '200%',
						y: '180%',
						rotate: 15,
						duration: 0.2,
						delay: 1.2,
						zIndex: 2
					})
					gsap.fromTo('#mewtwo',{opacity: 0}, {
						opacity: 0.7,
						x: '-320%',
						y: '-180%',
						rotate: 15,
						duration: 0.15,
						delay: 1.2,
						zIndex: 1
					})
					gsap.fromTo('#lugia',{opacity: 0}, {
						opacity: 0.7,
						x: '-320%',
						y: '180%',
						rotate: -15,
						duration: 0.15,
						delay: 1.2,
						zIndex: -2
					})

					//---Card-contents---
					tl.to('.card-text', {
						opacity: 1,
						stagger: 0.12
					}, 0.5)
				}
			}
		);
	});
</script>

<section>
	<div id="container" class="">
		<div
			class="card-group"
			on:mouseover={() => (cardGroupHovered = true)}
			on:mouseout={() => (cardGroupHovered = false)}
		>
			<div
				on:mouseover={() => (charizardCardHovered = true)}
				on:mouseout={() => (charizardCardHovered = false)}
			>
				<Charizard {cardGroupHovered} {charizardCardHovered} />
			</div>

			<div id="card-1" class="big-card card" on:click={navToContact}>
				<div class="card-text">
					<p>Contact</p>
				</div>
			</div>

			<div
				on:mouseover={() => (bulbasaurCardHovered = true)}
				on:mouseout={() => (bulbasaurCardHovered = false)}
			>
				<Bulbasaur {cardGroupHovered} {bulbasaurCardHovered} />
			</div>

			<div
				on:mouseover={() => (mewtwoCardHovered = true)}
				on:mouseout={() => (mewtwoCardHovered = false)}
			>
				<Mewtwo {cardGroupHovered} {mewtwoCardHovered} />
			</div>

			<div id="card-2" class="big-card card" on:click={navToAbout}>
				<div class="card-text">
					<p>About</p>
				</div>
			</div>

			<div
				on:mouseover={() => (lugiaCardHovered = true)}
				on:mouseout={() => (lugiaCardHovered = false)}
			>
				<Lugia {cardGroupHovered} {lugiaCardHovered} />
			</div>

			<div id="card-3" class="big-card card" on:click={navToWork}>
				<div class="card-text">
					<p>Work</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	* {
		visibility: hidden;
	}

	#container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		position: relative;
		/* overflow: hidden; */
	}

	.card-group {
		position: absolute;
		width: 34vmin;
		aspect-ratio: 5/7;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* visibility: hidden; */
	}

	.card {
		position: absolute;
		aspect-ratio: 5/7;
		transition:
			transform 800ms cubic-bezier(0.28, 0.93, 0.34, 0.85),
			opacity 0.4s,
			z-index 0.8s;
		border: 2px solid rgba(255, 255, 255, 0.434);
		backdrop-filter: blur(10px);
		box-shadow: -10px 10px 12px black;
	}

	.big-card {
		width: 34vmin;
		border-radius: 1vmin;
	}

	#card-1 {
		transform: translateX(-10%) rotate(-1deg);
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('$lib/assets/home-page/batch-2/contact.jpg');
		background-position: center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#card-2 {
		transform: translateX(-6%) rotate(-3deg);
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.607)) , url('$lib/assets/home-page/batch-2/about_1.jpg');
		background-position: center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#card-3 {
		transform: translateX(-10%, 3%) rotate(5deg);
		background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.422)), url('$lib/assets/home-page/batch-2/work_2.jpg');
		background-position: top;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-text {
		align-items: center;
		justify-content: center;
		font-size: 2.4rem;
		color: white;
		text-shadow: 2px 2px 2px black;
		opacity: 0;
		transition: opacity 0.4s ease-in-out;
	}

	.card-group:hover > #card-1 {
		transform: translate(-75%, 16%) rotate(-24deg);
	}

	.card-group:hover > #card-2 {
		transform: translate(-2%, 0%) rotate(3deg);
	}

	.card-group:hover > #card-3 {
		transform: translate(75%, 16%) rotate(24deg);
	}

	.card-group:hover > .card {
		opacity: 0.6;
		cursor: pointer;
	}

	.card-group:hover > .card:hover {
		opacity: 1;
		z-index: 99;
	}

	#card-1:hover .card-text {
		opacity: 1;
	}

	#card-2:hover .card-text {
		opacity: 1;
	}

	#card-3:hover .card-text {
		opacity: 1;
	}
</style>
