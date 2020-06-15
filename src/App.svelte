<script>
	import Background from './components/Background.svelte'
	import Title from './components/Title.svelte'
	import Quote from './components/Quote.svelte'
	import Portfolio from './components/Portfolio.svelte'
	import Profile from './components/Profile.svelte'
	import Employment from './components/Employment.svelte'
	import Education from './components/Education.svelte'
	import References from './components/References.svelte'
	
	import { info } from './info.js';

</script>

<main>
	<Title {...info.title} />
	<Quote {...info.quote} />
	<Portfolio />
	<!-- <Profile />
	<Employment />
	<Education />
	<References />	 -->
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>