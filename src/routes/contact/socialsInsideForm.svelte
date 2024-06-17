<script>
	import socialsData from './socialsData';
</script>

<div class="socials-div-inside-form flex gap-4 items-center justify-center">
	{#each socialsData as data}
		<div class="{data.name} text-[gray] text-2xl hover:text-white">
			<a href={data.url} target="_blank"><i class={data.icon}></i></a>
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

	.socials-div-inside-form {
		@media (max-width: 495px) {
			display: none;
		}
		@media (min-width: 495px) {
			display: flex;
		}
	}
</style>
