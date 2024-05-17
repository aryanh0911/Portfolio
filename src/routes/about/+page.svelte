<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import pfp1 from '$lib/assets/about-page/pfp1.jpeg';

    function navToHome() {
        window.location.href = '/'
    }

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
            opacity: 0,
        });
		
        tl.from('#para', {
			y: 20,
			opacity: 0
		});

	});
</script>

<section>
	<div id="cover-page" on:click={navToHome} class="w-full h-[8rem] bg-center lg:h-[12rem]">
		<div id="back-btn" class="pl-6 pt-4 w-fit cursor-pointer">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="2rem"
				height="2rem"
				fill="white"
				><path
					d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
				></path></svg
			>
        </div>

		<div id="pfp" class="absolute right-[30%] top-[50%] md:right-[20%] md:top-[50%] lg:top-[65%]">
			<img id="pfp-img" src={pfp1} alt="" class="" />
		</div>
	</div>

	<div id="para" class="w-[90vw] md:w-[70vw] lg:w-[40vw] ml-auto mr-auto mt-10  p-6 rounded-lg bg-[#2222229b]">
		<p class="text-slate-300 text-lg">
			heyo :) I'm Aryan, a web-developer and a tech-enthusiast. I'm interested in learning the ins
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
	#cover-page {
		background-image: url('$lib/assets/about-page/vinyl.gif');
		background-size: cover;
		visibility: hidden;
		position: relative;
	}

	#para {
		visibility: hidden;
	}

	#pfp {
		visibility: hidden;
	}

	#pfp img {
		width: 8rem;
		border: 2px solid #b1b1af;
		padding: 3px;
		border-radius: 50%;
		box-shadow: 4px 4px 20px black;
	}
</style>
