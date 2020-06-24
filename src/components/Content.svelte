<script>
	import Title from './Title.svelte'
	import Quote from './Quote.svelte'
	import Portfolio from './Portfolio.svelte'
	import Profile from './Profile.svelte'
	import Employment from './Employment.svelte'
	import Education from './Education.svelte'
	import References from './References.svelte'
	
	import { info } from '../info.js';
	export let isDarkMode;
</script>
	
<div class="content_inner" class:dark-mode={isDarkMode}>
  <Title {...info.title} {isDarkMode} />
  <h1>The Dark Mode is {isDarkMode}</h1>
  <br />
  <Quote {...info.quote} />
  <Portfolio />
  <!-- <Profile />
  <Employment />
  <Education />
  <References />	 -->

  <div id="footer">This page is still in progress. More content to come ...</div>
</div>

<style type="text/scss">
  @import '../scss/colorscheme.scss';

	.content_inner {
    min-height: 0;
    height: 50%;
    overflow-y: scroll; // set expected overflow
		
		// styling
    padding: 50px 20%;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
    }
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
		height: 200px;
	}

</style>