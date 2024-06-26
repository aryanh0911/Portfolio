<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);
	//--------------------------------------------------------------------------------------------

	//--- Components ---
	import SocialsInsideForm from './socialsInsideForm.svelte';
	import SocialsOutsideForm from './socialsOutsideForm.svelte';
	//--------------------------------------------------------------------------------------------

	//--- Firebase ---
	import { db, realtimeDb } from '$lib/firebase.js';
	import { collection, addDoc } from 'firebase/firestore';
	import { ref, set } from 'firebase/database';

	let name = '';
	let email = '';
	let msgContent = '';
	let submitBtnText = 'Submit';
	let submitClicked = false;

	async function handleSubmit(event) {
		event.preventDefault();

		//Optional email value check
		const emailValue = email || 'No email provided';

		// Save to Firestore Database
		try {
			const docRef = await addDoc(collection(db, 'contacts'), {
				name,
				email: emailValue,
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
				email: emailValue,
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
			.call(() => (submitBtnText = 'Submitted'))
			.to('.submit-text', { opacity: 1, duration: 0.2 })
			.call(() => (submitClicked = true))
			.from('#go-home', { opacity: 1, y: 6, duration: 0.5 });

		// Clear form
		name = '';
		email = '';
		msgContent = '';
	}
	//----------------------------------------------------------------------------------------------

	//--- GSAP ---
	onMount(() => {
		gsap.set('*', { visibility: 'visible' });

		let tl = gsap.timeline();
		tl.from('.main-text span', { opacity: 0, y: 32, stagger: 0.07, ease: 'power3.out' });
		tl.from('.container', { opacity: 0, y: 8, duration: 0.5, ease: 'power3.inOut' });
		tl.from('.LinkedIn, .Github, .Twitter, .Instagram', {
			opacity: 0,
			y: 10,
			stagger: 0.05,
			ease: 'power4.out'
		});
	});
</script>

<div class="main">
	<div class="main-text">
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
				<div class="inputBox">
					<input type="text" bind:value={name} placeholder="Type in your name..." />
				</div>
				<div class="inputBox">
					<input type="email" bind:value={email} placeholder="Type in your e-mail (optional)..." />
				</div>
				<div class="inputBox">
					<textarea bind:value={msgContent} cols="30" rows="10" placeholder="Leave a message..."
					></textarea>
				</div>

				<div class="bottom w-full flex justify-between">
					<SocialsInsideForm />

					<div class="submit-btn rounded-[10px]">
						<button type="submit" class="submit-text">{submitBtnText}</button>
					</div>
				</div>
			</form>
		</div>
		<div class="flex justify-center items-center pt-[0.5rem]">
			<a
				id="go-home"
				href="/"
				class="{submitClicked ? 'go-home-visible' : 'go-home-hidden'} text-[#9e9e9e]"
				>Go back Home?</a
			>
		</div>
	</div>
	<SocialsOutsideForm />
</div>

<style>
	/* FONTS */
	@import url('https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=M+PLUS+Rounded+1c&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
		font-family: 'Averia Sans Libre', 'Poppins', sans-serif;
		font-size: 5rem;
		padding: 1rem;
		line-height: 0.45;
		letter-spacing: -2px;
		background: linear-gradient(to right, lightseagreen, rgb(118, 62, 215));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		@media (max-width: 930px) {
			font-size: 4rem;
			padding: 1rem;
			line-height: 0.35;
		}
		@media (max-width: 490px) {
			font-size: 3.2rem;
		}
	}

	.form-wrapper {
		width: 45rem;
		padding-right: 1rem;
		display: flex;
		flex-direction: column;
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
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
		border-bottom: dotted 2px rgb(71, 180, 227);
		color: rgb(215, 212, 212);
		background-color: rgb(72, 72, 72);

		@media (max-width: 460px) {
			font-size: 0.8rem;
		}
	}

	.inputBox textarea {
		font-family: 'Poppins', sans-serif;
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
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
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
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
	}

	@media (max-width: 460px) {
		::placeholder {
			font-size: 0.8rem;
		}
	}

	.bottom {
		@media (max-width: 495px) {
			justify-content: center;
		}
	}

	.go-home-visible {
		visibility: visible;
	}
	.go-home-hidden {
		visibility: hidden !important;
	}
</style>
