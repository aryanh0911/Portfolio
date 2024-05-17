<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const tl = gsap.timeline({
			onStart: () => {
				document.querySelector('#cover-page').style.visibility = 'visible';
				document.querySelector('#para').style.visibility = 'visible';
			}
		});

		tl.from('#cover-page', {
			opacity: 0,
			y: 20
		});

		tl.from('#para', {
			y: 20,
			opacity: 0
		});
	});
</script>

<section>
	<div id="cover-page" class="w-full h-[8rem] bg-center lg:h-[12rem]"></div>

	<div id="para" class="w-2/3 ml-auto mr-auto mt-10">
		<p class="text-slate-300 text-lg">
			heyo :) I'm Aryan, a web-developer and a tech-enthusiast. I'm interested in learning the ins
			and outs of the web, how things work over there, and the possible ways I can implement what
			I've learnt into building projects.
		</p>

		<p class="text-slate-300 text-lg mt-8">
			Apart from seeing me spend time on my set-up trying to make sense out of all the code I write,
			you can find me making music. I listen to all kinds of music, make covers and sometimes write
			my own to put them on the internet.
		</p>
	</div>
</section>

<style>
	#cover-page {
		background-image: url('$lib/assets/about-page/vinyl.gif');
		background-size: cover;
		visibility: hidden;
	}

	#para {
		visibility: hidden;
	}
</style>
