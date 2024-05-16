<script>
	export let cardGroupHovered = false;
	export let lugiaCardHovered = false;
</script>

<div
	id="mewtwo"
	class="{cardGroupHovered ? 'card-group-hovered' : ''} {lugiaCardHovered ? 'card-hovered' : ''}"
></div>

<style>
	#mewtwo {
		width: 12vmin;
		position: absolute;
		top: 50%;
		left: 50%;
		aspect-ratio: 5/7;
		transition:
			transform 800ms cubic-bezier(0.28, 0.93, 0.34, 0.85),
			opacity 0.4s,
			z-index 0.8s;
		background-image: url('https://www.serebii.net/card/silvertempest/185.jpg');
		background-position: center;
		background-size: cover;
		/* transform: translate(-50%, -50%); */
		border: 2px solid rgba(255, 255, 255, 0.434);
		border-radius: 1vmin;
		backdrop-filter: blur(10px);
		box-shadow: -10px 10px 20px black;
	}

	.card-group-hovered {
		opacity: 0.6;
		transform: translate(-280%, 140%) rotate(-15deg);
	}

	.card-hovered {
		opacity: 1;
		z-index: 99;
	}
</style>
