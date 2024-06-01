<!-- <h3 class="text-white">work page/</h3> -->

<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// ---GSAP---
	onMount(() => {
		const heroCards = document.querySelectorAll('.card');

		heroCards.forEach((card) => {
			card.addEventListener('mouseenter', () => {
				gsap.to(card, { scale: 1.02, duration: 0.3, zIndex: 2 });
			});

			card.addEventListener('mouseleave', () => {
				gsap.to(card, { scale: 1, duration: 0.3, zIndex: 1 });
			});
		});

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

		heroCards.forEach((card) => {
			tl.to(card, {
				y: gsap.utils.random(-5.5, -5),
				stagger: 0.1,
				repeat: -1,
				yoyo: true,
				duration: 2
			});
		});

		heroCards.forEach((card) => {
			tl.to(card, {
				yPercent: gsap.utils.random(-200, -50),
				ease: 'none',
				scrollTrigger: {
					trigger: '#main-container',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
					ease: 'none'
					// markers: true
				}
			});
		});
	});
</script>

<section class="">
	<div id="main-container" class="">
		<div id="header-text" class="">
			<p class=""><span>W</span><span>O</span><span>R</span><span>K</span></p>
		</div>

		<div class="floating-cards">
			<div class="card-1 card rounded-md"></div>
			<div class="card-2 card rounded-md"></div>
			<div class="card-3 card rounded-md"></div>
			<div class="card-4 card rounded-md"></div>
			<div class="card-5 card rounded-md"></div>
			<div class="card-6 card rounded-md"></div>
		</div>
	</div>
</section>

<style>
	#main-container {
		display: grid;
		place-content: center;
		/* width: 100vw; */
		max-width: 2049px;
		min-height: 150vh;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		/* overflow: hidden; */

		@media (max-width: 690px) {
			min-height: 120vh;
		}
	}

	#header-text {
		visibility: hidden;
		position: absolute;
		z-index: 2;
		left: 50%;
		top: 25%;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
		color: white;
		font-size: 5rem;
		@media (max-width: 690px) {
			font-size: 4rem;
		}
	}

	#header-text p {
		display: flex;
	}

	#header-text p span {
		visibility: hidden;
	}

	.floating-cards {
		@media (max-width: 1212px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			place-content: center;
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

		@media (screen) {
		}
		@media (max-width: 690px) {
			width: 12rem;
		}
	}

	.card-1 {
		/* width: 21rem; */
		background-image: url('$lib/assets/about-page/prog-pfp.gif');
		background-size: cover;
		/* position: absolute; */
		top: 2rem;
		left: 8rem;

		/* @media (max-width: 320px) {
			width: 14rem;
		} */
		@media (max-width: 1645px) {
			left: 2rem;
		}
		@media (max-width: 1450px) {
			left: 1rem;
		}
		@media (max-width: 1392px) {
			left: 0.5rem;
		}
		/* @media (max-width: 1212px) {
			left: 50%;
			transform: translateX(-100%);
		}
		@media (max-width: 390px) {
			left: 60%;
		} */
	}

	.card-2 {
		/* width: 21rem; */
		/* position: absolute; */
		top: 24.3rem;
		left: 36.5rem;
		background-image: url('https://cdn.vox-cdn.com/thumbor/2Af_v_XrHTP-UweyZnkg5B_fC2o=/245x0:1311x600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50875545/no_mans_sky_art.0.0.jpg');
		background-size: cover;
		background-position: center;

		/* @media (max-width: 320px) {
			width: 14rem;
		} */
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
		/* @media (max-width: 1212px) {
			left: 50%;
			transform: translateX(-100%);
			top: 32rem;
		}
		@media (max-width: 690px) {
			top: 19.5rem;
		}
		@media (max-width: 390px) {
			left: 60%;
		} */
	}
	.card-3 {
		/* width: 21rem; */
		/* position: absolute; */
		top: 3rem;
		right: 8rem;
		background-image: url('https://mixed-news.com/en/wp-content/uploads/2023/08/No-Mans-Sky-Echoes.jpg');
		background-size: cover;
		background-position: center;

		/* @media (max-width: 320px) {
			width: 14rem;
		} */
		@media (max-width: 1645px) {
			right: 2rem;
		}
		@media (max-width: 1450px) {
			right: 1rem;
		}
		@media (max-width: 1392px) {
			right: 0.5rem;
		}
		/* @media (max-width: 1212px) {
			left: 50.5%;
			top: 8rem;
		}
		@media (max-width: 390px) {
			left: 40%;
		} */
	}
	.card-4 {
		/* width: 21rem; */
		/* position: absolute; */
		top: 14rem;
		right: 36.5rem;
		background-image: url('https://assets1.ignimgs.com/2019/08/14/no-mans-sky---beyond-version---button-1565744905061.jpg');
		background-size: cover;
		background-position: center;

		/* @media (max-width: 320px) {
			width: 14rem;
		} */
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
		/* @media (max-width:1212px) {
			left: 50.5%;
			top: 38rem;
		}
		@media (max-width: 690px) {
			top: 25.5rem;
		}
		@media (max-width: 390px) {
			left: 40%;
		} */
	}
	.card-5 {
		/* width: 21rem; */
		/* position: absolute; */
		top: 53.3rem;
		left: 18rem;
		background-image: url('https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/06/Saga-6e7883abba45ec557821.jpg');
		background-size: cover;
		background-position: center;

		/* @media (max-width: 320px) {
			width: 14rem;
		} */
		@media (max-width: 1392px) {
			left: 10rem;
		}
		/* @media (max-width: 1212px) {
			left: 50%;
			transform: translateX(-100%);
			top: 62rem;
		}
		@media (max-width: 690px) {
			top: 37rem;
		}
		@media (max-width: 390px) {
			left: 60%;
		} */
	}
	.card-6 {
		/* width: 21rem; */
		/* position: absolute; */
		top: 44.3rem;
		right: 18.5rem;
		background-image: url('https://images.alphacoders.com/136/1360645.jpeg');
		background-size: cover;
		background-position: center;
		/* 
		@media (max-width: 320px) {
			width: 14rem;
		} */
		@media (max-width: 1392px) {
			right: 12rem;
		}
		/* @media (max-width: 1212px) {
			left: 50.5%;
			top: 68rem;
		}
		@media (max-width: 690px) {
			top: 43rem;
		}
		@media (max-width: 390px) {
			left: 40%;
		} */
	}
</style>
