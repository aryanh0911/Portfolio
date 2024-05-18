<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	// ---Components---
	import Cover from './cover.svelte'

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

	<div
		id="para"
		class="w-[90vw] md:w-[70vw] lg:w-[40vw] ml-auto mr-auto mt-20 p-6 rounded-lg bg-[#2222229b]"
	>
		<p class="text-slate-300 text-lg">
			heyo :) I'm Aryan, a web-developer and a tech-enthusiast who's interested in learning the ins
			and outs of the web, how things work over there, and the possible ways I can implement what
			I've learnt into building projects.
		</p>

		<p class="text-slate-300 text-lg mt-3">
			Apart from seeing me spend time on my set-up trying to make sense out of all the code I write,
			you can find me making music. I listen to all kinds of music, make covers and sometimes write
			my own to put them on the internet.
		</p>
	</div>
</section>

<style>
	#para {
		visibility: hidden;
	}
</style>
