<script>
	import { darkmode } from '../styles.js'
	function toggle() {
		darkmode.update(darkmode => !darkmode)
	}

	// Dark Mode
	let isDarkMode;
	const unsubscribe = darkmode.subscribe(value =>  isDarkMode = value );
</script>

<button on:click={toggle} class:dark-mode={isDarkMode} >
	<slot/>
</button>

<style type="text/scss">
	
	button {
		background-color: var(--colorbg);
		color: var(--colorbase);
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
		position: fixed;
		right: 20px;
		top: 10px;
		z-index: 99;
		
	}
	button.dark-mode {
		background-color: var(--darkcolorbg);
		color: var(--darkcolorbase);
	}
</style>