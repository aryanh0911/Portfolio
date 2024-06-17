<script>
	import socialsData from './socialsData';

	function handleClick(event) {
		event.preventDefault();
		const url = event.currentTarget.href;

		setTimeout(() => {
			window.open(url, '_blank')
		}, 300);
	}
</script>

<div class="socials-div-outside-form flex gap-4 items-center justify-center">
	{#each socialsData as data}
		<div class="{data.name} text-[gray] text-2xl hover:text-white">
			<a href={data.url} on:click|preventDefault={handleClick}><i class={data.icon}></i></a>
		</div>
	{/each}
</div>

<style>
	.LinkedIn,
	.Github,
	.Twitter,
	.Instagram {
		transition: color 0.2s;
	}

	.socials-div-outside-form {
		@media (max-width: 495px) {
			display: flex;
		}
		@media (min-width: 495px) {
			display: none;
		}
	}
</style>
