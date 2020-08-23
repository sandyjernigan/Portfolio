<script>
	// import variables from info.js
	export let link
	export let header
	export let projectList
	export let bgStyle
	export let description
	export let github
	export let additional
	// Dark Mode
	export let isDarkMode;
</script>

<div class="project" class:dark-mode={isDarkMode}>
	<div class="github"><a href={github} target="_blank"><i class="fab fa-github"></i></a></div>
	<a href={link} target="_blank">
		<div class="content-inner fl-wrap">
			<div class="content-front">
				<div class="cf-inner">
					<div class="bg" style={bgStyle}></div>
					<div class="overlay"></div>
				</div>
			</div>
			<div class="content-back">
				<div class="cf-inner">
					<div class="inner">
						<h2>{header}</h2>
						<ul>
							{#each projectList as item}
							<li>{item}</li>
							{/each}
						</ul>
						<div class="serv">{description}</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <p>{@html additional}</p> -->
	</a>
</div>

<style>
	.project {
		width: 100%;
	}
	.github {
		position: relative;
		top: 1.7rem;
		left: -46%;
		font-size: 2rem;
		text-shadow: -1px -1px 3px #fff;
		z-index: 5;
	}
	.github i {
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.8);
	}
	.dark-mode .github i {
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.6);
		box-shadow: -2px 2px #888888;
	}
	.dark-mode .github {
		color: var(--darkcolorbase);
		text-shadow: -1px -1px 3px #000;
	}
	a {
		color: var(--colorbase);
	}
	a:visited{
		color: var(--colorbase);
	}
	.dark-mode a {
		color: var(--darkcolorbase);
	}
	.dark-mode a:visited {
		color: var(--darkcolorbase);
	}
	.content-front:nth-child(2):after {
		content: '';
	}
	.content-inner {
		min-width: 250px;
		max-height: 300px;
		color: #fff;
		position: relative;
		transform-style: preserve-3d;
		perspective: 1000px;
		backface-visibility: hidden;
		transition: 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		height: 100%;
	}
	.content-inner .content-front,
	.content-inner .content-back {
		position: relative;
		transform-style: preserve-3d;
		perspective: 1000px;
		backface-visibility: hidden;
		display: flex;
		width:100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.content-inner .content-back {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
		transform: rotateY(180deg);
		background: #292929;
		background-image: url("https://images.unsplash.com/photo-1572284795851-e2c9da37db05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");
	}
	.content-front {
		background: #292929;
		position: relative;
	}
	.content-inner > * {
		backface-visibility: hidden;
		transition: 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	.cf-inner:before,
	.cf-inner:after {
		content: "";
		position: absolute;
		width: 50px;
		height: 50px;
		border-color: rgba(255, 255, 255, 0.6);
		z-index: 10;
	}
	.cf-inner:before {
		top: 20px;
		left: 20px;
		border-left: 1px solid;
		border-top: 1px solid;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.2;
		z-index: 3;
	}
	.cf-inner:after {
		bottom: 20px;
		right: 20px;
		border-right: 1px solid;
		border-bottom: 1px solid;
	}
	.content-inner .cf-inner {
		transform-style: preserve-3d;
		backface-visibility: hidden;
		width: 100%;
		padding: 150px 20px;
	}
	.content-inner .cf-inner .inner {
		background: rgba(0, 0, 0, 0.5);
		align-items: stretch;
		transform-style: preserve-3d;
		perspective: 1000px;
		backface-visibility: hidden;
		transform: translateZ(95px) scale(0.81);
		text-align: center;
		position: relative;
		padding: 10px;
		z-index: 2;
	}
	.content-inner .cf-inner .inner h2 {
		position: relative;
		font-size: 22px;
		font-weight: 800;
		padding-bottom: 20px;
	}
	/* .content-inner .cf-inner .inner h2:before {
		content: "";
		position: absolute;
		left: 50%;
		bottom: 10px;
		width: 20px;
		height: 2px;
		margin-left: -10px;
		background: #00bcd4;
	} */
	.content-inner li {
		display: inline-block;
		color: #fff;
		text-transform: uppercase;
		font-size: 10px;
		letter-spacing: 2px;
		margin: 0 4px;
	}
	.serv {
		background: rgba(255, 255, 255, 0.1);
		padding: 15px 30px;
		margin-top: 14px;
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.content-inner:hover .content-front {
		transform: rotateY(-180deg);
	}
	.content-inner:hover .content-back {
		transform: rotateY(0deg);
	}
	.inner:before,
	.cf-inner:after {
		content: "";
		position: absolute;
		width: 50px;
		height: 50px;
		border-color: rgba(255, 255, 255, 0.4);
		z-index: 10;
	}
	.cf-inner:before,
	.cf-inner:after {
		content: "";
		position: absolute;
		width: 50px;
		height: 250px;
		border-color: rgba(0, 188, 212, 0.33);
		z-index: 10;
	}
	.content-back .cf-inner:before {
		top: 100px;
	}
	.content-back .cf-inner:after {
		bottom: 100px;
	}

</style>