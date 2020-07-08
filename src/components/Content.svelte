<script>
	import { Title, Portfolio, Skills, History, References } from './content/index.js'	
	import Section from './Section.svelte'
	import { info } from '../info.js';
  export let isDarkMode;

  const sections = [ "title", "projects", "skills" ]
</script>
	
<div id="home" class="content_inner" class:dark-mode={isDarkMode}>

	<!-- Considering a for loop to transverse each section based on order in sections
    
  <Section sectionid="title" nextsectionid="projects">
		<Title {...info.title} {isDarkMode} />
	</Section>
  
	<Section sectionid="projects" nextsectionid="skills">
    <Portfolio {...info.portfolio} />
	</Section>

	<Section sectionid="skills" nextsectionid="history">
	  <Skills {...info.skills} />
	</Section> -->

	<Section sectionid="history" nextsectionid="references">
    <History />
	</Section>

	<Section sectionid="references" nextsectionid="footer">
    <References />
	</Section>

	<Section sectionid="footer" nextsectionid="title">
   <div>This page is still in progress. More content to come ...</div>
	</Section>

</div>

<style type="text/scss">
  @import '../scss/colorscheme.scss';

  :global(p) {
    color: $color-base;
  }
  :global(.dark-mode p){
    color: $dark-color-base;
  }

	.content_inner {
    min-height: 0;
    height: 50%;
		
		// styling
    padding: 0 11% 0 2%;
  }
  
	// Dark Mode
	.dark-mode {
		background-color: $dark-color-bg;
		color: $dark-color-base;

		.content_inner {
			background-color: $dark-color-bg;
		}
	}

	#footer {
		height: 500px;
	}

</style>