<style>
	:global(:root) {
		--colorbg: #212F3D;
		--colorbase: #EBEDEF;
	}
	/* :global(.dark-mode) {
		background-color: var(--darkcolorbg);
		color: var(--darkcolorbase);
	}
  :global(body.dark-mode) {
    color: var(--darkcolorbase);
  }
  :global(.dark-mode div) {
    color: var(--darkcolorbase);
  }
  :global(.dark-mode p) {
    color: var(--darkcolorbase);
  }
  :global(.dark-mode a) {
    color: var(--darkcolorbase);
  }
  :global(.dark-mode i) {
    color: var(--darkcolorbg);
    text-shadow: 1px 1px 2px var(--darkcolorbase), -1px -1px 2px var(--darkcolorbase);
  } */
</style>

color: var(--colorbase);
color: var(--darkcolorbase);

background-color: var(--colorbg);
background-color: var(--darkcolorbg);


	:global(:root) {
		--colorbg: #EBEDEF;
		--colorbase: #212F3D;

		--darkcolorbg: #212F3D;
		--darkcolorbase: #EBEDEF;
	}