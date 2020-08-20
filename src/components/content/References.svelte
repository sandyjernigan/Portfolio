<script>
	// Ideas from: 

	// Dark Mode
	export let isDarkMode;

</script>

<div class="references" class:dark-mode={isDarkMode}>
  <p class="center">References Furnished Upon Request</p>

  <h1><a href="http://www.lambdaschool.com">Lambda School</a></h1>
  <p>Lambda School is a 9+ month computer science & software engineering program that provides 
    an immersive hands-on curriculum with a focus on computer science, and full stack web development. 
    Students in this program…</p>

    <ul>
      <li>Approach all coding challenges using pair programming</li>
      <li>Utilize agile software development and Git workflow on all projects</li>
      <li>Gain hands-on experience with client and server testing</li>
      <li>Design original user experiences across a range of web and mobile platforms, from ideation, to wireframing, to final product</li>
      <li>Complete all curriculum course work including: React, Redux, Node, Express, MongoDB, Jest, Python, Django, etc</li>
      <li>Write production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS and Express on the backend to build single-page applications</li>
    </ul>
</div>

<style>
	div {
		width: 100%;
    max-width: 500px;
		padding-top: 20vh;
		color: var(--colorbase);
    text-align: left;
	}
	h1 {
		filter: grayscale(50%);
		font-weight: bold;
		font-size: 2rem;
    padding-top: 50px;
	}
	p {
		filter: grayscale(50%);
		margin-top: 10px;
		font-size: 1.1rem;
	}
	.dark-mode {
		color: var(--darkcolorbase);
	}
	.dark-mode a {
		color: var(--darkcolorbase);
	}
  ul {
    padding-top: 10px;
  }
  li {
    list-style-type: circle;
  }
  .center {
    text-align: center;
  }

</style>