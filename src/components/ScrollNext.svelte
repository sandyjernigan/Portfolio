<script>
  export let nextsectionid;
</script>

<div id={nextsectionid}>
  <button><i class="arrow down"></i>{nextsectionid}</button>
</div>

<style>
  div {
		display: inline-block;
    position: absolute;
    bottom: -20rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>
