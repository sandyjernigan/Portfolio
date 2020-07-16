<script>
	import { Quote } from './index.js';
	export let name;
	export let title;
	export let profileImg;
	export let github;
	export let linkedin;
	export let quote;
	export let quoteby;
	export let isDarkMode;
</script>

<section class:dark-mode={isDarkMode}>

	<div class="title">	
		<div class="profileImage">
			<img src={profileImg} alt="Profile" />
		</div>

		<div class="titleContent">
			<h1>Hi! I'm <br />
				{name}.</h1>
			<p>{title}</p>

			<div class="contact">
				<div class="icons">
					<a href={github}>
						<i class="fab fa-github"></i></a>
					<a href={linkedin}>
						<i class="fab fa-linkedin"></i></a>
				</div>
			</div>
		</div>
	</div>

	<div class="break"></div>

	<div class="quote">
		<Quote {quote} {quoteby} />
	</div>

</section>

<style type="text/scss">
	@import '../../scss/colorscheme.scss';

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		padding-top: 1rem;
		color: var(--color-base);
		min-height: 280px;
		padding-bottom: 2vh;

		&.dark-mode {
			color: var(--dark-color-base);
		}
	}

	.title {
		display: flex;
		// flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	}
	.break {
		flex-basis: 100%;
		height: 0;
		width: 0;
	}
	.quote {
		flex-basis: 100%;
		padding-left: 25%;
	}

	.titleContent, .profileImage {
		padding: 1rem;
	}

	h1 {
		font-family: 'Merienda One', cursive;
		font-size: 2rem;
		font-weight: 300;
		letter-spacing: 2px;
		line-height: 4rem;
		padding: 1rem 2rem;
	}

	p {
		font-size: 1.5rem;
		font-weight: 200;
		margin-top: -0.5rem;
		padding: 0.5rem;
	}

	img {
		width: 100%;
		max-width: 250px;
		border-radius: 125px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
	}

	.contact {
		display: flex;
		justify-content: center;
		align-items: baseline;
	}

	.icons {
		padding-top: 5%;
		font-size: 2rem;
	}

	i {
		color: $color-base;
		filter:opacity(20%);
		letter-spacing: 2rem;
	}
	i:hover {
		transform: scale(1.5);
		filter:opacity(60%);
	}

	// Dark Mode
	.dark-mode i {
		color: $dark-color-base;
	}

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
		#title {
			display:block;
		}
		.titleContent, .profileImage {
			padding: 0.1rem;
		}
		h1 {
			font-size: 1.5rem;
			font-weight: 300;
			letter-spacing: 1.5px;
			line-height: 2rem;
			padding: 0.5rem 1rem;
		}
		p {
			font-size: 1rem;
			font-weight: 200;
			padding: 0.5rem;
		}
		.contact {
			display: block;
			font-size: .8rem;
		}
	}

</style>