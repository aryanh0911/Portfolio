<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);
//--------------------------------------------------------------------------------------------
	//--- Components ---
	import Socials from './socials.svelte';
//--------------------------------------------------------------------------------------------
	//--- Firebase ---
	import { db, realtimeDb } from '$lib/firebase.js';
	import { collection, addDoc } from 'firebase/firestore';
	import { ref, set } from 'firebase/database';

	let name = '';
	let email = '';
	let msgContent = '';
	let submitBtnText = 'Submit';

	async function handleSubmit(event) {
		event.preventDefault();

		// Save to Firestore Database
		try {
			const docRef = await addDoc(collection(db, 'contacts'), {
				name,
				email,
				message: msgContent,
				timestamp: new Date()
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}

		// Save to Realtime Database
		try {
			const dbRef = ref(realtimeDb, 'contacts/' + Date.now());
			await set(dbRef, {
				name,
				email,
				message: msgContent,
				timestamp: new Date()
			});
			console.log('Data written to Realtime Database');
		} catch (e) {
			console.error('Error writing to Realtime Database: ', e);
		}

		// Change button text
		let tl2 = gsap.timeline();
		tl2
			.to('.submit-text', { opacity: 0, duration: 0.2 })
			.call(() => {
				submitBtnText = 'Submitted';
			})
			.to('.submit-text', { opacity: 1, duration: 0.2 });

		// Clear form
		name = '';
		email = '';
		msgContent = '';
	}
//----------------------------------------------------------------------------------------------
	//---Boolean that varies with window-size---
	let isMobile = false;
	// let initialCheckDone = false;

	//--- GSAP ---
	onMount(() => {
		gsap.set('*', { visibility: 'visible' });

		let tl = gsap.timeline();
		tl.from('.main-text span', { opacity: 0, y: 32, stagger: 0.07, ease: 'power3.out' });
		tl.from('.container', { opacity: 0, y: 8, duration: 0.5, ease: 'power3.inOut' });
		tl.from('.LinkedIn, .Github, .Twitter, .Instagram', { opacity: 0, stagger: 0.04 });

		//---Check window size and add event listener for resize---
		const checkWindowSize = () => {
			isMobile = window.innerWidth <= 495;
			// initialCheckDone = true;
		};
		checkWindowSize(); // Check on initial load
		window.addEventListener('resize', checkWindowSize); //check on resize
		return () => {
			window.removeEventListener('resize', checkWindowSize);
		};
	});
</script>

<div class="main">
	<div class="main-text font-mont">
		<div>
			<span>L</span><span>e</span><span>t's</span>
		</div>
		<div>
			<span>C</span><span>o</span><span>n</span><span>n</span><span>e</span><span>c</span><span
				>t</span
			>
		</div>
	</div>

	<div class="form-wrapper">
		<div class="container">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="inputBox font-mont">
					<input type="text" bind:value={name} placeholder="Type in your name..." />
				</div>
				<div class="inputBox font-mont">
					<input type="email" bind:value={email} placeholder="Type in your e-mail..." />
				</div>
				<div class="inputBox font-mont">
					<textarea bind:value={msgContent} cols="30" rows="10" placeholder="Leave a message..."
					></textarea>
				</div>

				<div class="bottom w-full flex justify-between">
					<!-- {#if initialCheckDone} -->
						<Socials smallScreen={isMobile ? 'hidden' : 'visible'} />
					<!-- {/if} -->

					<div class="submit-btn font-mont rounded-[10px]">
						<button type="submit" class="submit-text">{submitBtnText}</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<!-- {#if initialCheckDone} -->
		<Socials smallScreen={isMobile ? 'visible' : 'hidden'} />
	<!-- {/if} -->
</div>

<style>
	* {
		visibility: hidden;
	}

	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		min-height: 100vh;
		width: 100%;

		@media (max-width: 840px) {
			flex-direction: column;
			gap: 0.8rem;
			padding: 1rem;
		}
	}

	.main-text div {
		font-size: 5rem;
		background: linear-gradient(to right, lightseagreen, rgb(118, 62, 215));
		line-height: 0.85;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		@media (max-width: 930px) {
			font-size: 4rem;
			padding: 1rem;
			line-height: 0.35;
		}
	}

	.form-wrapper {
		width: 45rem;
		padding-right: 2rem;
		display: flex;
		justify-content: center;

		@media (max-width: 840px) {
			width: 100%;
			padding: 0 1rem;
		}
	}

	.container {
		max-width: 45rem;
		padding: 3.2rem 1rem;
		border-radius: 16px;
		box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		border: 1px solid rgb(71, 71, 71);
		background-color: #292929;

		@media (max-width: 840px) {
			padding: 2rem 1rem;
		}
	}

	.container form {
		width: 85%;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		align-items: center;

		@media (max-width: 930px) {
			gap: 0.2rem;
		}
	}

	.inputBox {
		width: 100%;
		margin: 10px 0;
		border-radius: 5px;
		overflow: hidden;
	}

	.inputBox input[type='text'],
	.inputBox input[type='email'] {
		width: 100%;
		height: 50px;
		border-radius: 5px;
		border: none;
		outline: none;
		overflow: hidden;
		padding: 0px 10px;
		font-size: 1rem;
		border-bottom: dotted 2px rgb(71, 180, 227);
		color: rgb(215, 212, 212);
		background-color: rgb(72, 72, 72);
	}

	.inputBox textarea {
		width: 100%;
		height: 120px;
		border-radius: 5px;
		outline: none;
		overflow: hidden;
		border-bottom: 2px dotted rgb(71, 180, 227);
		padding: 0px 10px;
		font-size: 16px;
		color: rgb(215, 212, 212);
		background-color: rgb(72, 72, 72);
		resize: none;
		box-sizing: border-box;
	}

	.inputBox input[type='email']:focus,
	.inputBox input[type='text']:focus,
	.inputBox textarea:focus {
		border-bottom: 2px solid rgb(71, 180, 227);
	}

	.submit-btn {
		padding: 10px 26px;
		color: #fff;
		font-size: 1.1rem;
		font-weight: bold;
		cursor: pointer;
		text-align: center;
		border-radius: 10px;
		position: relative;
		z-index: 0;
		background: linear-gradient(to left, lightseagreen, rgb(118, 62, 215));
	}

	.submit-btn::before {
		position: absolute;
		inset: 0;
		content: '';
		z-index: -1;
		opacity: 0;
		border-radius: inherit;
		background: linear-gradient(to right, lightseagreen, rgb(118, 62, 215));
		transition: opacity 0.3s;
	}

	.submit-btn:hover::before {
		opacity: 1;
	}

	::placeholder {
		font-size: 1rem;
	}

	.bottom {
		@media (max-width: 495px) {
			justify-content: center;
		}
	}

	/* .alert {
		width: 100%;
		background: rgb(0, 255, 106);
		padding: 10px 20px;
		border-radius: 5px;
		text-align: center;
		font-size: 18px;
		font-weight: 900;
		display: none;
		color: white;
		z-index: 10;
	} */
</style>
