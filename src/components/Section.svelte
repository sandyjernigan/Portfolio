<script>
  import ScrollNext from "./ScrollNext.svelte";
  export let sectionid;
  export let nextsectionid;
</script>

<div id={sectionid}>
  <slot></slot>
  <ScrollNext nextsectionid={nextsectionid} />
</div>

  <span class="arrowHome">
    <a href="#home">
      <i class="fas fa-home"></i>
    </a>
  </span>

<style type="text/scss">
  @import '../scss/colorscheme.scss';
  
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 96vh;
    padding-left: 5%;
  }
  span {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 2em;
    
    a {
      text-shadow: 1px 1px 2px $color-bg, -1px -1px 2px $color-bg;
    }
  }


</style>