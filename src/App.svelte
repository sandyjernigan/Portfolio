<script>
	import Background from './Background.svelte'
	import Title from './Title.svelte'
	import Quote from './Quote.svelte'
	import Contact from './Contact.svelte'
	import Portfolio from './Portfolio.svelte'
	import Profile from './Profile.svelte'
	import Employment from './Employment.svelte'
	import Education from './Education.svelte'
	import References from './References.svelte'
	
	import { info } from './info.js';

</script>

<main>
	<Title {...info.titleContent} />
	<Quote {...info.quoteContent} />
	<Contact />
	<Portfolio />
	<Profile />
	<Employment />
	<Education />
	<References />	
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