<script>
	export let name;
	export let title;
	export let profileImg;
	export let github;
	export let linkedin;
	export let facebook;
	export let twitter;
	export let isDarkMode;
	import { darkmode } from '../styles.js'
</script>

<div id="title" class:dark-mode={isDarkMode}>
	
	<div class="profileImage">
		<img src={profileImg} alt="Profile" />
	</div>

	<div class="titleContent">
		<h1>Hi! I'm <br />
			{name}.</h1>
		<p>{title}</p>

		<div class="contact">
			<div class="follow">
				Please Follow Me:
			</div>
			<div class="icons">
				<a href={github}>
					<i class="fab fa-github"></i></a>
				<a href={linkedin}>
					<i class="fab fa-linkedin"></i></a>
				<a href={facebook}>
					<i class="fab fa-facebook"></i></a>
				<a href={twitter}>
					<i class="fab fa-twitter"></i></a>
			</div>
		</div>
	</div>

</div>

<style type="text/scss">
	@import '../scss/colorscheme.scss';
	
	h1 { font-family: 'Merienda One', cursive; }

	#title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
		color: $color-base;
	}

	#title.dark-mode {
		color: $dark-color-base;
	}

	.titleContent, .profileImage {
		padding: 1rem;
	}

	h1 {
		font-size: 3rem;
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
		max-width: 200px;
		border-radius: 100px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
	}

	.contact {
		display: flex;
		justify-content: center;
		align-items: baseline;
	}

	.follow {
		padding: 0.5rem 1rem 1rem 0;
		font-size: 0.9rem;
	}

	i {
		color: $color-base;
		filter:opacity(20%);
		letter-spacing: 1.1rem;
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