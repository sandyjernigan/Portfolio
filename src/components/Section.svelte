<script>
  import ScrollNext from "./ScrollNext.svelte";
  export let sectionid;
  export let nextsectionid;
</script>

<div id={sectionid}>
  <slot></slot>
  <ScrollNext {nextsectionid} />
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
</style>