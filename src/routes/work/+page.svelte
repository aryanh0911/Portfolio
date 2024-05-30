<!-- <h3 class="text-white">work page/</h3> -->

<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// ---GSAP---
	onMount(() => {
		const heroCards = [...document.querySelectorAll('.floating-cards .card')];
		const tl = gsap.timeline({
			onStart: () => {
				gsap.set('#header-text, #header-text p span, .floating-cards .card', {
					visibility: 'visible'
				});
			}
		});
		tl.from('#header-text p span', {
			opacity: 0,
			y: 32,
			duration: 1.5,
			stagger: 0.04,
			ease: 'power3.out'
		}).from(
			'.floating-cards .card',
			{
				opacity: 0,
				y: gsap.utils.random(100, 50),
				stagger: 0.1
			},
			1
		);

		heroCards.forEach(card => {
			tl.to(card, {
			y: gsap.utils.random(-5.5,-5),
			stagger: 0.1,
			repeat: -1,
			yoyo: true,
			duration: 2,
		})
		})


		heroCards.forEach((card) => {
			tl.to(card, {
				yPercent: gsap.utils.random(-200, -50),
				ease: 'none',
				scrollTrigger: {
					trigger: '#main-container',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
					ease: 'none',
					// markers: true
				}
			});
		});

		// tl.to('.floating-cards .card', {
		// 	yPercent: gsap.utils.random(-200, -50),
		// 	ease: 'none',
		// 	scrollTrigger: {
		// 		trigger: '#main-container',
		// 		start: 'top top',
		// 		end: 'bottom top',
		// 		scrub: true,
		// 		ease: 'none',
		// 		markers: true
		// 	}
		// });

	});


</script>

<section class="">
	<div id="main-container" class="">
		<div id="header-text" class="">
			<p class="text-white text-8xl"><span>W</span><span>O</span><span>R</span><span>K</span></p>
		</div>

		<div class="floating-cards">
			<div class="card-1 card"></div>
			<div class="card-2 card"></div>
			<div class="card-3 card"></div>
			<div class="card-4 card"></div>
			<div class="card-5 card"></div>
			<div class="card-6 card"></div>
		</div>
	</div>
</section>

<style>
	#main-container {
		display: grid;
		place-content: center;
		/* width: 100vw; */
		min-height: 200vh;
		display: relative;
		/* overflow: hidden; */
	}

	#header-text {
		visibility: hidden;
		position: absolute;
		z-index: 2;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
	}

	#header-text p {
		display: flex;
	}

	#header-text p span {
		visibility: hidden;
	}

	.floating-cards .card {
		visibility: hidden;
		aspect-ratio: 5/7;
		position: absolute;
		background-color: black;
		cursor: pointer;
		/* transition: scale 0.2s ease-in-out; */
	}

	/* .card:hover {
        scale: 2;
		opacity: 0;
	} */

	.card-1 {
		width: 20.2rem;
		/* background-color: cyan; */
		background-image: url('$lib/assets/about-page/prog-pfp.gif');
		background-size: cover;
		position: absolute;
		top: 2rem;
		left: 8rem;

		@media (max-width: 320px) {
			width: 14rem;
		}
	}

	.card-2 {
		width: 20.2rem;
		position: absolute;
		top: 24.3rem;
		left: 36.5rem;
		background-image: url('https://cdn.vox-cdn.com/thumbor/2Af_v_XrHTP-UweyZnkg5B_fC2o=/245x0:1311x600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50875545/no_mans_sky_art.0.0.jpg');
		background-size: cover;
		background-position: center;

		@media (max-width: 320px) {
			width: 14rem;
		}
	}
	.card-3 {
		width: 20.2rem;
		position: absolute;
		top: 3rem;
		right: 8rem;
		background-image: url('https://mixed-news.com/en/wp-content/uploads/2023/08/No-Mans-Sky-Echoes.jpg');
		background-size: cover;
		background-position: center;

		@media (max-width: 320px) {
			width: 14rem;
		}
	}
	.card-4 {
		width: 20.2rem;
		position: absolute;
		top: 14rem;
		right: 36.5rem;
		background-image: url('https://assets1.ignimgs.com/2019/08/14/no-mans-sky---beyond-version---button-1565744905061.jpg');
		background-size: cover;
		background-position: center;

		@media (max-width: 320px) {
			width: 14rem;
		}
	}
	.card-5 {
		width: 20.2rem;
		position: absolute;
		top: 53.3rem;
		left: 18rem;
		background-image: url('https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/06/Saga-6e7883abba45ec557821.jpg');
		background-size: cover;
		background-position: center;

		@media (max-width: 320px) {
			width: 14rem;
		}
	}
	.card-6 {
		width: 20.2rem;
		position: absolute;
		top: 44.3rem;
		right: 18.5rem;
		background-image: url('https://images.alphacoders.com/136/1360645.jpeg');
		background-size: cover;
		background-position: center;

		@media (max-width: 320px) {
			width: 14rem;
		}
	}
</style>
