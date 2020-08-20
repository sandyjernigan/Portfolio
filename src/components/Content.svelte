<script>
	import { Title, Portfolio, Skills, Timeline, References } from './content/index.js';
	import Section from './Section.svelte';
  import Options from "./nav/Options.svelte";
	import ScrollHome from './nav/ScrollHome.svelte';
	import { info } from '../info.js';
	export let isDarkMode;
	
  // import { option } from './nav/options.js';

  const options = [
		{ selectComponent: 'title', component: Title, contents: info.title },
		{ selectComponent: 'portfolio', component: Portfolio, contents: info.portfolio },
		{ selectComponent: 'skills', component: Skills, contents: info.skills },
		{ selectComponent: 'timeline', component: Timeline, contents: info.timeline },
		{ selectComponent: 'references', component: References, contents: info.references },
	]
	let selected = options[0];
	
</script>

<div id="home"></div>

<div class="content_inner" class:dark-mode={isDarkMode}>

	<!-- <Options {isDarkMode} /> -->

	<!-- Use Bind to Select which Component Loads -->
	<div class="selection">
		
		<select bind:value={selected}>
			{#each options as option}
				<option value={option}>{option.selectComponent}</option>
			{/each}
		</select>
	</div>

	<Section sectionid={selected.selectComponent}>
		<svelte:component this={selected.component} {...selected.contents} {isDarkMode}/>
	</Section>

	<Section sectionid="end" nextsectionid="title">
   <div id="footer">This page is still in progress. More content to come ...</div>
	</Section>

	<ScrollHome />

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
		position: absolute;
		top: 100px;
		right: 10px;
		z-index: 99;
	}
	#footer {
		height: 500px;
	}
</style>