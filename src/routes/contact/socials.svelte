<script>
	import socialsData from './socialsData';
</script>

<div class="socials-div flex gap-4 items-center justify-center">
	{#each socialsData as data}
		<div class="{data.name} text-[gray] text-2xl hover:text-white">
			<a href={data.url}><i class={data.icon}></i></a>
		</div>
	{/each}
</div>

<style>
    .LinkedIn, .Github, .Twitter, .Instagram {
        transition: color 0.2s;
    }

    .socials-div {
        @media (max-width: 426px) {
            gap: 0.5rem;
        }
    }
</style>
