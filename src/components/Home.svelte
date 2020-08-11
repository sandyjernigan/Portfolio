<script>
	import Content from './Content.svelte'
	import DarkModeButton from './DarkModeButton.svelte'
	import Background from './Background.svelte'
	import { viewMenu } from '../styles.js'
  export let isDarkMode;
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
	// Nav Snap
	$snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);

	// Fonts to use
	@import url('https://fonts.googleapis.com/css2?family=Merienda+One');
	
	main {
		z-index: 9;
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		background-color: var(--darkcolorbg);
		color: var(--darkcolorbase);

		// Scroll Bar
		overflow-x: hidden;
    overflow-y: scroll; // set expected overflow
    scrollbar-width: 0.5em; /* Firefox */
    scrollbar-color: var(--darkcolorbg) var(--colorbg);
    &::-webkit-scrollbar {
      width: 0.5em;
      background-color: var(--darkcolorbg); /* Chrome/Safari/Webkit */
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1em;
			background-color: var(--darkcolorbg);
			filter: brightness(105%);
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
		background-color: var(--colorbg);
    overflow: hidden;

		@media (min-width: 640px) {
			max-width: none;
		}
	}

  .content.viewMenu {
		transform: rotate(-40deg);
		border: 5px inset darkgray;
		
		.dark-mode {
			border: 1px inset lightgrey;
		}
  }
  
	// Dark Mode
	main.dark-mode {
		background-color: var(--colorbg);
		color: var(--colorbase);
	}
	.dark-mode {
		.content {
			background-color: var(--darkcolorbg);
		}
	}
</style>