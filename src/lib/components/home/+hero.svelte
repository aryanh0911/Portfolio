<script>
	import Charizard from './charizard-card.svelte';
	import Bulbasaur from './bulbasaur-card.svelte';
	import Mewtwo from './mewtwo-card.svelte';
	import Lugia from './lugia-card.svelte';

	let cardGroupHovered = false;
	let charizardCardHovered = false;
	let bulbasaurCardHovered = false;
	let mewtwoCardHovered = false;
	let lugiaCardHovered = false;

	function navToAbout() {
		window.location.href = '/about';
	}

	function navToContact() {
		window.location.href = '/contact';
	}

	function navToWork() {
		window.location.href = '/work';
	}
</script>

<div class="flex justify-center items-center min-h-screen">
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
				<p>About Me</p>
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

<style>
	.card-group {
		position: relative;
		aspect-ratio: 5/7;
		width: 30vmin;
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
		box-shadow: -10px 10px 20px black;
	}

	.big-card {
		width: 30vmin;
		border-radius: 1vmin;
	}

	#card-1 {
		transform: translateX(-10%) rotate(-1deg);
		background-image: url('https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#card-2 {
		transform: translateX(-6%) rotate(-3deg);
		background-image: url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#card-3 {
		transform: translateX(-10%, 3%) rotate(5deg);
		background-image: url('https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
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
