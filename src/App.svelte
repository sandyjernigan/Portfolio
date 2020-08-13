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
</svelte:head>

<!-- <div class="testing">Testing</div> -->

<Menu {isDarkMode} />
<Home {isDarkMode} />

<style>
	:global(:root) {
		--colorbg: #EBEDEF;
		--colorbase: #212F3D;
		--primarycolor: #1e3a57;
		--monocolor: #3e5671;
		--orange: #ad643a;

		--darkcolorbg: #212F3D;
		--darkcolorbase: #EBEDEF;
		--darkprimarycolor: #3e5671;
		--darkmonocolor: #1e3a57;
		--darkcompcolor: #3d2c21;

		--green: #5ca681;
		--purple: #6e5ca6;

		--darkred: #3d2521;
		--darkbrown: #3d3321;
		--darkgreen: #213d2f;
		--darkpurple: #28213d;

	}
	/*
	https://www.sessions.edu/color-calculator/
	https://www.sessions.edu/color-calculator-results/?colors=212f3d,3d3a21,3d2128
	https://htmlcolorcodes.com/color-picker/

	:global(div) {
		color: var(--colorbase);
	}
	:global(.dark-mode) {
		color: var(--darkcolorbase);
	} */
	/* .testing {
    color: var(--colorbase);
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 10em;
		z-index: 99;
	} */
</style>