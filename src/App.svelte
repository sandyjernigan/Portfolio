<script>
	import CSS from './components/Styles.svelte'
	import Menu from './components/Menu.svelte'
	import Content from './components/Content.svelte'
	import DarkModeButton from './components/DarkModeButton.svelte'
	import Background from './components/Background.svelte'
	import { darkmode } from './styles.js'

	// Start with Dark Mode On
	let isDarkMode;
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
</script>

<svelte:head>
    <link rel="stylesheet" href="./css/reset.css">
</svelte:head>
<CSS />

<div id="page" class:dark-mode={isDarkMode}>
	<Menu />
	<Content />
	<DarkModeButton>Dark Mode Toggle</DarkModeButton>
	<Background />
</div>

<style type="text/scss">
  @import 'scss/colorscheme.scss';

	// Nav Snap
	$snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);


	:global(body){
		background-color: $color-bg;
		color: $color-base;
		height: 100%;
		overflow: hidden;
	}

	// Fonts to use
	@import url('https://fonts.googleapis.com/css2?family=Merienda+One');
	
	.page {
		height: 200%;
		background-color: $color-bg;
		color: $color-base;
		
		.dark-mode {
			background-color: $dark-color-bg;
			color: $dark-color-base;
		}
	}

</style>