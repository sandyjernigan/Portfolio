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
	@import '../scss/colorscheme.scss';
	
	button {
		background-color: $color-bg;
		color: $color-base;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
		position: fixed;
		right: 20px;
		top: 10px;
		z-index: 1;
		
	}
	button.dark-mode {
		background-color: $dark-color-bg;
		color: $dark-color-base;
	}
</style>