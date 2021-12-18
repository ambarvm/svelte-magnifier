<script>
	import { base } from '$app/paths';
	import Magnifier from '$lib/Magnifier.svelte';
</script>

<main>
	<h1>svelte-magnifier</h1>

	<p>
		<a href="https://github.com/supercoww/svelte-magnifier">GitHub</a>
		<a href="https://www.npmjs.com/package/svelte-magnifier">npm</a>
	</p>

	<div>
		<Magnifier src="{base}/test-image.jpg" alt="Example" />
	</div>

	<p>
		Based on
		<a href="https://github.com/samuelmeuli/react-magnifier/" target="_blank" rel="noopener">
			react-magnifier
		</a>
		by Samuel Meuli
	</p>
</main>

<style>
	:global(.magnifier) {
		max-width: 700px;
	}

	main {
		font-family: monospace;
		text-align: center;
	}

	:global(html) {
		background-color: black;
		color: white;
	}

	a {
		color: skyblue;
	}

	p {
		font-size: 1.1rem;
		margin: 1.5em auto;
	}
</style>
