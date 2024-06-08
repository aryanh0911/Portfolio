<!-- <h3 class="text-white">work page/</h3> -->

<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// ---Components---
	import FloatingCards from './floatingCards.svelte';

	// ---GSAP---
	onMount(() => {
		let mm = gsap.matchMedia();
		mm.add(
			{
				isDesktop: '',
				isTablet: '(max-width: 1212px)',
				isMobile: ''
			},
			(context) => {
				let { isDesktop, isTablet, isMobile } = context.conditions;
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
				})
				.to('#header-text p span', {
					opacity: 0,
					stagger: 0.12,
					delay: 2,
				})
				.from(
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

				if (isTablet) {
					heroCards.forEach((card) => {
						tl.to(card, {
							yPercent: gsap.utils.random(-10, -25),
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
				} else {
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
				}
			}
		);
	});
</script>

<section class="">
	<div id="main-container" class="">
		<div id="header-text" class="">
			<p class=""><span>W</span><span>O</span><span>R</span><span>K</span></p>
		</div>
		<FloatingCards />
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
</style>
