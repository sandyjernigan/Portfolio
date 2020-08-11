<script>
	import { Title, Portfolio, Skills, History, References } from './content/index.js'	
	import Section from './Section.svelte'
	import ScrollHome from './nav/ScrollHome.svelte'
	import { info } from '../info.js';
  export let isDarkMode;

  const sections = [ "title", "projects", "skills" ]
</script>

<div id="home"></div>

<div class="content_inner" class:dark-mode={isDarkMode}>

	<!-- Considering a for loop to transverse each section based on order in sections  -->
    
  <!-- <Section sectionid="title" nextsectionid="projects">
		<Title {...info.title} {isDarkMode} />
	</Section>
  
	<Section sectionid="projects" nextsectionid="skills">
    <Portfolio {...info.portfolio} {isDarkMode} />
	</Section> -->

	<!-- <Section sectionid="skills" nextsectionid="history">
	  <Skills {...info.skills} {isDarkMode} />
	</Section> -->

	<Section sectionid="history" nextsectionid="references">
    <History {...info.history} {isDarkMode} />
	</Section>

	<Section sectionid="references" nextsectionid="footer">
    <References />
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
	#footer {
		height: 500px;
	}
</style>