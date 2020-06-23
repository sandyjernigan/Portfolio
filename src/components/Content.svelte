<script>
	import Title from './Title.svelte'
	import Quote from './Quote.svelte'
	import Portfolio from './Portfolio.svelte'
	import Profile from './Profile.svelte'
	import Employment from './Employment.svelte'
	import Education from './Education.svelte'
	import References from './References.svelte'
	import { viewMenu } from '../styles.js'
	
	import { info } from '../info.js';
	export let isDarkMode;
</script>
	
<main class="content" class:dark-mode={isDarkMode} class:viewMenu={$viewMenu}>
  <div class="content_inner">
    <Title {...info.title} {isDarkMode} />
    <h1>The Dark Mode is {isDarkMode}</h1>
    <br />
    <Quote {...info.quote} />
    <!-- <Portfolio /> -->
    <!-- <Profile />
    <Employment />
    <Education />
    <References />	 -->
  </div>
</main>

<style type="text/scss">
  @import '../scss/colorscheme.scss';

	// Nav Snap
	$snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);

	main {
  	height: 100%;
		z-index: 5;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 5em auto 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.content {
		// essential
		height: 200%; // make higher or you'll see background when rotated
		transform-origin: top left;
		transition: transform .7s $snap;
		
		// styling
		background-color: $color-bg;
	}

	.content_inner {
		// essential
		height: 50%; // compensate for higher .content
		overflow-y: auto; // set expected overflow
		
		// styling
		padding: 50px 20%;
  }

  .content.viewMenu {
    transform: rotate(-30deg);
  }
  
	// Dark Mode
	.dark-mode {
		background-color: $dark-color-bg;
		color: $dark-color-base;

		.content {
			background-color: $dark-color-bg;
		}

		.content_inner {
			background-color: $dark-color-bg;
		}
	}

</style>