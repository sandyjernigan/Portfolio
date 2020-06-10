<script>
	import Background from './Background.svelte';
	let name = "Sandy Jernigan"
</script>

<main>
	<h1>Hi! I'm {name}.</h1>
	<p>Full-Stack Web Developer</p>

	<p class="header-quote">
		<span class="quote">One look is worth a thousand words.</span>
		<span class="by">Printer's Ink, December 1921</span>
	</p>

	<div class="follow">
		<p>Please Follow Me:</p>
		<i class="fab fa-github"></i>
		<i class="fab fa-linkedin"></i>
		<i class="fab fa-facebook"></i>
	</div>

	<p>Currently working on updating this site.</p>

	<p>This site will include projects I have worked on. It it Just My Space.</p>
	
</main>
<Background />

<style>
	main {
		z-index: 5;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 5em auto 0;
	}

	h1 {
		color: cornflowerblue;
		font-size: 4em;
		font-weight: 300;
    letter-spacing: 2px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>