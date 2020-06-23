<script>
	import CSS from './components/Styles.svelte'
	import Menu from './components/Menu.svelte'
	import Content from './components/Content.svelte'
	import DarkModeButton from './components/DarkModeButton.svelte'
	import Background from './components/Background.svelte'
	import { darkmode } from './styles.js'

	// Check for Dark Mode
	let isDarkMode;
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
	let wavesColor = "33, 47, 61";
</script>

<svelte:head>
    <link rel="stylesheet" href="./css/reset.css">
</svelte:head>
<CSS />

<div id="page" class:dark-mode={isDarkMode}>
	<Menu {isDarkMode} />
	<Content  {isDarkMode} />
	<DarkModeButton>Dark Mode Toggle</DarkModeButton>
</div>

{#if isDarkMode}
	<Background {isDarkMode} bgColor={wavesColor}/>
{:else}
	<Background {isDarkMode} />
{/if}

<style type="text/scss">
  @import 'scss/colorscheme.scss';

	// Nav Snap
	$snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);

	// Fonts to use
	@import url('https://fonts.googleapis.com/css2?family=Merienda+One');
	
	.page {
		height: 100%;
		background-color: $color-bg;
		color: $color-base;
		
		.dark-mode {
			background-color: $dark-color-bg;
			color: $dark-color-base;
		}
	}
</style>