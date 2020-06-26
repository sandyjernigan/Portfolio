<script>
	import { Title, Quote, Portfolio } from './content/index.js'	
	import Section from './Section.svelte'
	import { info } from '../info.js';
  export let isDarkMode;
</script>
	
<div class="content_inner" class:dark-mode={isDarkMode}>
	<Section>
		<Title {...info.title} {isDarkMode} />
	</Section>
  
  <h1>The Dark Mode is {isDarkMode}</h1>
  <br />
  <Quote {...info.quote} />
  <Portfolio />
	
  <!-- 
	<Profile />
  <Employment />
  <Education />
  <References />
	-->
  <div>Content .... </div><br />	
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />
  <div>Content .... </div><br />

  <div id="footer">This page is still in progress. More content to come ...</div>
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
    overflow-y: scroll; // set expected overflow
		
		// styling
    padding: 0 11% 0 2%;
    scrollbar-width: 0.5em; /* Firefox */
    scrollbar-color: $dark-color-bg $color-bg;
    &::-webkit-scrollbar {
      width: 0.5em;
      background-color: $dark-color-bg; /* Chrome/Safari/Webkit */
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1em;
      background-color: lighten($dark-color-bg, 5%);
      outline: 1px solid slategrey;
    }
  }

  // ::-webkit-scrollbar-thumb:vertical {
  //   background: $color-bg url('img/transparent-bubble-gif-10.png') no-repeat;
  // }

  // ::-webkit-scrollbar-thumb {
  //   background: url('img/transparent-bubble-gif-10.png') no-repeat;
  // }
  
	// Dark Mode
	.dark-mode {
		background-color: $dark-color-bg;
		color: $dark-color-base;

		.content_inner {
			background-color: $dark-color-bg;
		}
	}

	#footer {
		height: 200px;
	}

</style>