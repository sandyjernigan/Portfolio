<script>
	export let isDarkMode;
</script>

<div class:dark-mode={isDarkMode}>

	<p>This site is made using <a href="https://svelte.dev/">Svelte</a>.

	<p>Currently working on updating this site. This section will be replaced with a list of projects I have worked on and links to the github code.</p>

</div>

<style>
	div {
		padding-bottom: 10vh;
		color: var(--colorbase);
	}
	p {
		filter: grayscale(50%);
		font-weight: bold;
		font-size: 2rem;
	}
	.dark-mode {
		color: var(--darkcolorbase);
	}
	.dark-mode a {
		color: var(--darkcolorbase);
	}

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
		p {
			font-size: 1rem;
		}
	}
</style>