<script>
  export let nextsectionid;
  
  function goTo(section) {
		alert({section})
	}
</script>

<div class="arrow"
  onclick="goTo({nextsectionid})">
  <i class="fas fa-angle-double-down"></i>
  <!-- <br />{nextsectionid} -->
</div>

<style type="text/scss">
  div {
		display: inline-block;
    bottom: 20px;
    left: 50%;
    font-size: 3em;
  }
  i {
    top: 0;
    transition: top ease 0.5s;
    padding: 10px;
    padding-left: 10%;
  }
  i:hover {
    -moz-animation: bounce 1.5s infinite;
    -webkit-animation: bounce 1.5s infinite;
    animation: bounce 1.5s infinite;
  }
  @-moz-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      -moz-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
</style>
