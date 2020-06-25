<script>
	import CSS from './components/Styles.svelte'
	import Menu from './components/Menu.svelte'
	import Content from './components/Content.svelte'
	import DarkModeButton from './components/DarkModeButton.svelte'
	import Background from './components/Background.svelte'
	import { darkmode, viewMenu } from './styles.js'

	// Check for Dark Mode
	let isDarkMode;
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
	let wavesColor = "33, 47, 61";
</script>

<svelte:head>
    <link rel="stylesheet" href="./css/reset.css">
</svelte:head>
<CSS />

<Menu {isDarkMode} />

<main id="home" class:dark-mode={isDarkMode}>
	<div class="content" class:viewMenu={$viewMenu}>

		{#if isDarkMode}
			<Background {isDarkMode} bgColor={wavesColor}/>
		{:else}
			<Background {isDarkMode} />
		{/if}
		
		<Content  {isDarkMode} />
		<DarkModeButton>Dark Mode Toggle</DarkModeButton>

	</div>
</main>

<style type="text/scss">
  @import 'scss/colorscheme.scss';

	// Nav Snap
	$snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);

	// Fonts to use
	@import url('https://fonts.googleapis.com/css2?family=Merienda+One');
	
	main {
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background-color: $dark-color-bg;
		color: $dark-color-base;
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