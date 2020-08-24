<script>
	import { afterUpdate } from 'svelte';
	import { Title, Portfolio, Skills, Timeline, References } from './content/index.js';
	import Section from './Section.svelte';
  // import Options from "./nav/Options.svelte";
	// import ScrollHome from './nav/ScrollHome.svelte';
	import { info } from '../info.js';
	import { option } from './nav/options.js'
	export let isDarkMode;

  // const options = [
	// 	{ selectComponent: 'title', component: Title, contents: info.title },
	// 	{ selectComponent: 'portfolio', component: Portfolio, contents: info.portfolio },
	// 	{ selectComponent: 'skills', component: Skills, contents: info.skills },
	// 	{ selectComponent: 'timeline', component: Timeline, contents: info.timeline },
	// 	{ selectComponent: 'references', component: References, contents: info.references },
	// ]

  const options = {
		title: { component: Title, contents: info.title },
		portfolio: { component: Portfolio, contents: info.portfolio },
		skills: { component: Skills, contents: info.skills },
		timeline: { component: Timeline, contents: info.timeline },
		references: { component: References, contents: info.references }
	}
	let selected = options[$option];

	afterUpdate(() => {
		selected = options[$option];
	});
	
</script>

<div id="home"></div>

<div class="content_inner" class:dark-mode={isDarkMode}>


	<!-- Use Bind to Select which Component Loads -->
	<div class="selection">
		<!-- <Options {isDarkMode} /> -->
		<!-- <p>{selected_option}</p> -->
		<!-- <p>The Option is {$option}</p> -->
		<button on:click={option.setTitle}>Title</button>
		<button on:click={option.setPortfolio}>Portfolio</button>
		<button on:click={option.setSkills}>Skills</button>
		<button on:click={option.setTimeline}>Timeline</button>
		<button on:click={option.setReferences}>References</button>
		
		<!-- <select bind:value={selected}>
			{#each options as option}
				<option value={option}>{option.selectComponent}</option>
			{/each}
		</select> -->
	</div>

	<Section sectionid={selected.selectComponent}>
		<svelte:component this={selected.component} {...selected.contents} {isDarkMode}/>
	</Section>

	<Section sectionid="end" nextsectionid="title">
   <div id="footer">This page is still in progress. More content to come ...</div>
	</Section>

	<!-- <ScrollHome /> -->

</div>

<style>
  #home {
    margin-top: -100px;
  }
	.content_inner {
    min-height: 0;
    height: 50%;
    padding: 0 11% 0 2%;
	}
	.selection {
		position: fixed;
		top: 50px;
		right: 5px;
		z-index: 99;
		display: flex;
		/* flex-direction: column; */
	}
	#footer {
		height: 500px;
	}
	p {
		color: white;
	}
	button {
		background-color: var(--colorbg);
		color: var(--colorbase);
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
		z-index: 1;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 999px;
    border: 5px solid #284cff;
    font-family: monospace;
    font-size: 0.8rem;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
    white-space: nowrap;
    color: #fff;
    background: transparent;
    background-image: url(https://web.archive.org/web/20160312084140im_/http://splatoon.nintendo.com/assets/img/nav-bg-fill-blue.png?1443460871);
    background-repeat: repeat-x;
    background-position: 0 -100%;
    transition: 1.5s ease;
  }
  button:hover {
    background-position: 500% 100%;
  }
	.dark-mode button {
		background-color: var(--darkcolorbg);
		color: var(--darkcolorbase);
	}
</style>