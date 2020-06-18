<script>
	import CSS from './styles/Styles.svelte'
	import Menu from './components/Menu.svelte'
	import DarkModeButton from './components/DarkModeButton.svelte'
	import Background from './components/Background.svelte'
	import Title from './components/Title.svelte'
	import Quote from './components/Quote.svelte'
	import Portfolio from './components/Portfolio.svelte'
	import Profile from './components/Profile.svelte'
	import Employment from './components/Employment.svelte'
	import Education from './components/Education.svelte'
	import References from './components/References.svelte'
	
	import { info } from './info.js';

	// Start with Dark Mode On
	window.document.body.classList.add('dark-mode')

</script>

<svelte:head>
    <link rel="stylesheet" href="./css/global.css">
</svelte:head>

<div class="page">
	<Menu />
	
  <main class="content">
		<div class="content_inner">
			<Title {...info.title} />
			<DarkModeButton>Dark Mode Toggle</DarkModeButton>
			<!-- <Quote {...info.quote} />
			<Portfolio /> -->
			<!-- <Profile />
			<Employment />
			<Education />
			<References />	 -->
		</div>
	</main>
</div>

<Background />

<style type="text/scss">

	:global(body){
		background-color: #EBEDEF;
		color: #212F3D;
	}
	:global(body.dark-mode){
		background-color: #212F3D;
		color:#EBEDEF;
	}

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

  @import url('https://fonts.googleapis.com/css2?family=Merienda+One');

</style>