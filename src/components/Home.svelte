<script>
	import CSS from './Styles.svelte'
	import Menu from './Menu.svelte'
	import Content from './Content.svelte'
	import DarkModeButton from './DarkModeButton.svelte'
	import Background from './Background.svelte'
	import { darkmode, viewMenu } from '../styles.js'

	// Check for Dark Mode
	let isDarkMode;
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
	let wavesColor = "33, 47, 61";
</script>

<main class:dark-mode={isDarkMode}>
	<div class="content" class:viewMenu={$viewMenu}>

		{#if isDarkMode}
			<Background {isDarkMode} bgColor={wavesColor}/>
			<DarkModeButton><i class="fas fa-moon"></i></DarkModeButton>
		{:else}
			<Background {isDarkMode} />
			<DarkModeButton><i class="fas fa-sun"></i></DarkModeButton>
		{/if}
    
		<Content  {isDarkMode} />

	</div>
</main>

<style type="text/scss">
  @import '../scss/colorscheme.scss';

	// Nav Snap
	$snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);

	// Fonts to use
	@import url('https://fonts.googleapis.com/css2?family=Merienda+One');
	
	main {
		z-index: 9;
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background-color: $dark-color-bg;
		color: $dark-color-base;

    // Scroll Bar
    overflow-y: scroll; // set expected overflow
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

	.content {
		width: 100%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 5;
		text-align: center;
		margin: 5em auto 0;
		transform-origin: top left;
		transition: transform 1s $snap;
		background-color: $color-bg;
    overflow: hidden;

		@media (min-width: 640px) {
			max-width: none;
		}
	}

  .content.viewMenu {
		transform: rotate(-40deg);
		border: 5px inset darkgray;
		
		.dark-mode {
			border: 5px inset lightgrey;
		}
  }
  
	// Dark Mode
	main.dark-mode {
		background-color: $color-bg;
		color: $color-base;
	}
	.dark-mode {
		.content {
			background-color: $dark-color-bg;
		}
	}
</style>