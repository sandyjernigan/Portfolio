<script>
	// Idea from: https://codepen.io/uiswarup/full/ZEbVJEa

	import Projects from "./Projects.svelte"

	// list of projects
	export let projects1;
	export let projects2;

	// Dark Mode
	export let isDarkMode;

</script>

<div class="portfolio" class:dark-mode={isDarkMode}>

	<h1>Projects</h1>
	<p>See the code on Github (click the Github icon) <br /> or Select to go to the project.</p>

	<div class="projects">
		{#each projects1 as project}
			<div class="project">
			<Projects {...project} {isDarkMode}/>
			</div>
		{/each}
	</div>
	<div class="projects">
		{#each projects2 as project}
			<Projects {...project} {isDarkMode}/>
		{/each}
	</div>

</div>

<style>
	.portfolio {
		padding-top: 30vh;
	}
	div {
		width: 100%;
		color: var(--colorbase);
	}
	h1 {
		filter: grayscale(50%);
		font-weight: bold;
		font-size: 2rem;
	}
	p {
		filter: grayscale(50%);
		margin-top: 10px;
		font-size: 1.1rem;
	}
	.dark-mode {
		color: var(--darkcolorbase);
	}
	/* .dark-mode a {
		color: var(--darkcolorbase);
	} */
	.projects {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding-top:2vh;
		max-height: 300px;
	}
	/* @media (max-width: 1024px) {
		.projects {
			max-height: 240px;
		}
	} */

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