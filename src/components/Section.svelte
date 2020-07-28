<script>
  import ScrollNext from "./ScrollNext.svelte";
  export let sectionid;
  export let nextsectionid;
	export let isDarkMode;
</script>

<div id={sectionid} class:dark-mode={isDarkMode}>
  <slot></slot>
  <ScrollNext nextsectionid={nextsectionid} />
</div>

  <span class="arrowHome">
    <a href="#home">
      <i class="fas fa-home"></i>
    </a>
  </span>

<style type="text/scss">  
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 96vh;
    padding-left: 5%;
    margin-top: 100px;
  }
  .arrowHome {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 2em;
  }
</style>