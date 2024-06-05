<script>
	import FloatingCardData from './floatingCardData.js';
	import Card from './card.svelte';
</script>

<div class="floating-cards">
	<div class="first-col-wrapper">
		{#each FloatingCardData as data}
			{#if data.id % 2 !== 0}
				<Card cardNoClass={data.cardNoClass} generalClass={data.generalClass} projectImage={data.projectImage} projectName={data.projectName} date={data.date} description={data.description} techStack={data.techStack} />
			{/if}
		{/each}
	</div>

	<div class="second-col-wrapper">
		{#each FloatingCardData as data}
			{#if data.id % 2 === 0}
				<Card cardNoClass={data.cardNoClass} generalClass={data.generalClass} projectImage={data.projectImage} projectName={data.projectName} date={data.date} description={data.description} techStack={data.techStack} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.floating-cards {
		@media (max-width: 1212px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			place-content: center;
			column-gap: 0.3rem;
		}

		@media (max-width: 390px) {
			column-gap: 0.2;
		}
	}

	.first-col-wrapper {
		@media (max-width: 1212px) {			
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
	}

	.second-col-wrapper {
		@media (max-width: 1212px) {			
			display: flex;
			flex-direction: column;
			gap: 15px;
			margin-top: 21rem;
	
			@media (max-width: 690px) {
				margin-top: 13rem;
			}
			@media (max-width: 390px) {
				margin-top: 10rem;
			}
		}
	}
</style>
