<script>
	export let name;
	export let title;
	export let profileImg;
	export let github;
	export let linkedin;
	export let facebook;
	export let twitter;
</script>

<div class="title">
	
	<div class="profileImage">
		<img src={profileImg} alt="Profile" />
	</div>

	<div class="titleContent">
		<h1>Hi! I'm <br />
			{name}.</h1>
		<p>{title}</p>

		<div class="contact">
			<div class="follow">
				<span>Please Follow Me:</span>
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

<style>
	.title {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.titleContent, .profileImage {
		padding: 1rem;
	}

	h1 {
		font-family: cursive;
		font-size: 3rem;
		font-weight: 300;
		letter-spacing: 2px;
		line-height: 4rem;
	}

	p {
		font-size: 1.5rem;
		font-weight: 200;
		margin-top: -0.5rem;
	}

	img {
		width: 100%;
		max-width: 200px;
		border-radius: 100px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
	}
	.follow span{
		color: midnightblue;
		padding-right: 0.5rem;
	}
	i {
		color: midnightblue;
		font-size: 1.1rem;
		letter-spacing: 1.2rem;
	}
	i:hover {
		color: royalblue;
		transform: scale(1.5);
	}

</style>