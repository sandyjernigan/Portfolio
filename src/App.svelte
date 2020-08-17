<script>
	import Menu from './components/nav/Menu.svelte'
	import Home from './components/Home.svelte'

	// Check for Dark Mode
	let isDarkMode;
	import { darkmode } from './styles.js'
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
	
</script>

<svelte:head>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/global.css">
</svelte:head>

<Menu {isDarkMode} />
<Home {isDarkMode} />