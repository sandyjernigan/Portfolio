<script>
	import Menu from './components/Menu.svelte'
	import Home from './components/Home.svelte'
	import LightMode from './styles/LightMode.svelte'
	import DarkMode from './styles/Darkmode.svelte'
	import { darkmode, viewMenu } from './styles.js'

	// Check for Dark Mode
	let isDarkMode;
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
</script>

<svelte:head>
    <link rel="stylesheet" href="./css/reset.css">
</svelte:head>

<!-- {#if isDarkMode}
	<DarkMode />
{:else}
	<LightMode />
{/if} -->

<Menu />
<Home />

<style>
	:global(:root){
		--english-green-color: #1B4D3E;
		--color-base: #212F3D;
		--color-bg: #EBEDEF;
		
		--dark-color-base: #EBEDEF;
		--dark-color-bg: #212F3D;
	}
</style>