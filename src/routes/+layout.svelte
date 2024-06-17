<script>
	import '../app.css';
	import { page } from '$app/stores';

	// Default Title and Favicon
	let title = 'Portfolio'
	// let favicon = '%sveltekit.assets/favicon.png'

	//Route-based reactive title and favicon
	$: {
		if($page.url.pathname === '/about') {
			title = 'About - Portfolio'
		}
		else if($page.url.pathname === '/contact') [
			title =  'Contact - Portfolio'
		]
		else if($page.url.pathname === '/work') {
			title = 'Work - Portfolio'
		}
		else {
			title = 'Portfolio'
		}
	}
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>{title}</title>
	<!-- <link rel="icon" href="{favicon}"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main>
	<slot />
</main>

<style></style>
