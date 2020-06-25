<script>
  import { Title, Quote, Portfolio } from './content/index.js'
  import ScrollBar from './ScrollBar.svelte'	
	import { info } from '../info.js';
  export let isDarkMode;
</script>
	
<div class="content_inner" class:dark-mode={isDarkMode}>
  <Title {...info.title} {isDarkMode} />
  <h1>The Dark Mode is {isDarkMode}</h1>
  <br />
  <Quote {...info.quote} />
  <Portfolio />
	<br />
	<br />
	<br />
	<br />
  <div>Content .... </div>
  <!-- <Profile />
  <Employment />
  <Education />
  <References />	 -->

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />

	<br />
	<br />
	<br />
	<br />
  <div id="footer">This page is still in progress. More content to come ...</div>
  <ScrollBar />
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
    padding: 50px 20%;
    scrollbar-width: 0.5em; /* Firefox */
    scrollbar-color: $dark-color-bg $color-bg;
    &::-webkit-scrollbar {
      width: 0.5em;
      background-color: $dark-color-bg; /* Chrome/Safari/Webkit */
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1em;
      background-color: $color-bg;
      // outline: 1px solid slategrey;
    }
  }
  
	// Dark Mode
	.dark-mode {
		background-color: $dark-color-bg;
		color: $dark-color-base;

		.content_inner {
			background-color: $dark-color-bg;
      // scrollbar-color: $color-bg $dark-color-bg;
      // &::-webkit-scrollbar {
      //   background-color: $dark-color-bg; /* Chrome/Safari/Webkit */
      // }
      // &::-webkit-scrollbar-track {
      //   box-shadow: inset 0 0 6px rgba(25, 0, 116, 0.3);
      // }
      // &::-webkit-scrollbar-thumb {
      //   background-color: $dark-color-bg;
      //   outline: 1px solid slategrey;
      // }
		}
	}

	#footer {
		height: 200px;
	}

</style>