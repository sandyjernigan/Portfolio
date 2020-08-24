<script>
	// Idea from: https://codepen.io/uiswarup/full/ZEbVJEa

	import Projects from "./Projects.svelte"

	// list of projects
	export let projects;

	// Dark Mode
	export let isDarkMode;

</script>

<div class="portfolio" class:dark-mode={isDarkMode}>

	<h1>Projects</h1>
	<p>See the code on Github (click the Github icon) <br /> or Select to go to the project.</p>

	<div class="projects">
		{#each projects as project}
			<div class="project">
			<Projects {...project} {isDarkMode}/>
			</div>
		{/each}
	</div>
	<!-- <div class="projects">
		{#each projects2 as project}
			<div class="project">
			<Projects {...project} {isDarkMode}/>
			</div>
		{/each}
	</div> -->

</div>

<style>
	.portfolio {
		top: 0;
		padding-top: 10vh;
		overflow-x: scroll;
	}
	@media (max-width: 500px) {
		.portfolio {
			padding-top: 10vh;
		}
	}
		/* Hide scrollbar for Chrome, Safari and Opera */
	.portfolio::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.portfolio {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
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
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		/* max-height: 300px; */
	}
	/* @media (max-width: 1024px) {
		.projects {
			max-height: 240px;
		}
	} */
	.project {
		flex-basis: 31%;
		padding: 1%;
	}
	@media (max-width: 1040px) {
		.project {
			flex-basis: 45%;
		}
	}
	@media (max-width: 620px) {
		.project {
			flex-basis: 98%;
			width: 98%;
		}
	}

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
		p {
			font-size: 1rem;
		}
	}

</style>