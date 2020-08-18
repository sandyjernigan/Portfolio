<script>
	// Idea from: https://codepen.io/uiswarup/full/ZEbVJEa

	import Projects from "./Projects.svelte"

	// list of projects
	export let projects;

	// Dark Mode
	export let isDarkMode;

</script>

<div class:dark-mode={isDarkMode}>

	<h1>Projects</h1>

	<p>This site is made using <a href="https://svelte.dev/">Svelte</a>.

	<div class="projects">
		{#each projects as project}
			<Projects {...project} />
		{/each}		
	</div>

</div>

<style>
	div {
		width: 100%;
		padding-top: 20vh;
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
	.projects {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding-top:5vh;
	}

	/* custom-cursor */
	/* =============================================================================================== */
	/* .custom-cursor {
		width: 3rem;
		height: 3rem;
		border: 1px solid hsla(0, 0%, 100%, .7);
		border-radius: 100%;
		background: hsla(0, 0%, 80%, .2);
		position: absolute;
		z-index: 5;
		transform: translate(-50%, -50%);
		pointer-events: none;
	} */

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
		p {
			font-size: 1rem;
		}
	}

</style>