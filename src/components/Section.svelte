<script>
  import ScrollNext from "./nav/ScrollNext.svelte";
  export let sectionid;
  export let nextsectionid;
</script>

<section id={sectionid}>
  <slot></slot>
</section>

<style type="text/scss">  
  section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 96vh;
    padding-left: 5%;
    padding-top: 100px;
  }
</style>