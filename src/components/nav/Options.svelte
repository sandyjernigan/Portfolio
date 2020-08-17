<script>
  // Idea for Options came from: https://codepen.io/uiswarup/pen/dyyqaGR
  // Idea for Mobile Options from: https://codepen.io/arjunamgain/pen/qdpWLL/

  // Idea for Options - https://codepen.io/markmead/pen/mGmqrJ

	export let isDarkMode;
  import { option } from './options.js';

	function selectOption() {
		option.update(n => "title");
	}

</script>

<div class="options" on:click={selectOption} class:dark-mode={isDarkMode}>
  <button>Liquid Fill</button>
</div>

<style type="text/scss">
	
	button {
		background-color: var(--colorbg);
		color: var(--colorbase);
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
		position: fixed;
		right: 20px;
		top: 10px;
		z-index: 1;
		
    padding: 25px 50px;
    margin: 25px;
    border-radius: 999px;
    border: 5px solid #284cff;
    font-family: 'VT323', monospace;
    font-size: 25px;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
    white-space: nowrap;
    color: #fff;
    background: transparent;
    background-image: url(https://web.archive.org/web/20160312084140im_/http://splatoon.nintendo.com/assets/img/nav-bg-fill-blue.png?1443460871);
    background-repeat: repeat-x;
    background-position: 0 -100%;
    transition: 1.5s ease;
  }
  button:hover {
    background-position: 500% 100%;
  }
	.dark-mode button {
		background-color: var(--darkcolorbg);
		color: var(--darkcolorbase);
	}
</style>