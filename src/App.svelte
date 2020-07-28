<script>
	import Menu from './components/Menu.svelte'
	import Home from './components/Home.svelte'
	// Check for Dark Mode
	let isDarkMode;
	import { darkmode } from './styles.js'
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
</script>

<svelte:head>
    <link rel="stylesheet" href="./css/reset.css">
</svelte:head>

<!-- <div class="testing">Testing</div> -->

<Menu {isDarkMode} />
<Home {isDarkMode} />

<style>
	:global(:root) {
		--colorbg: #EBEDEF;
		--colorbase: #212F3D;

		--darkcolorbg: #212F3D;
		--darkcolorbase: #EBEDEF;
	}
	.testing {
    color: var(--colorbase);
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 10em;
		z-index: 99;
	}
</style>