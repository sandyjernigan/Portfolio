<script>  
  // Set Primary Color
  export let bgColor = "235,237,239"

	// Check for Dark Mode
  export let isDarkMode;

  // Set Colors
  let bgColor0 ="rgba(" + bgColor + ",1)"
  let bgColor1 ="rgba(255,255,255,0.1)"
  let bgColor2 ="rgba(255,255,255,0.2)"
  let bgColor3 ="rgba(" + bgColor + ",0.3)"
  let bgColor4 ="rgba(" + bgColor + ",0.4)"
  // }
</script>

<div class="bg-color" class:dark-mode={isDarkMode}></div>

<div class="background">
  <!--Waves Container-->
  <div class="header">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill={bgColor1} />
        <use xlink:href="#gentle-wave" x="48" y="0" fill={bgColor2} />
        <use xlink:href="#gentle-wave" x="48" y="3" fill={bgColor3} />
        <use xlink:href="#gentle-wave" x="48" y="5" fill={bgColor4} />
        <use xlink:href="#gentle-wave" x="48" y="7" fill={bgColor0} />
      </g>
    </svg>
  </div>
  <!--Waves end-->
</div>

<style type="text/scss">
  @import '../scss/colorscheme.scss';

  .bg-color {
    background-color: $dark-color-bg;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    text-align: center;
    font-size: 15rem;
  }
  .dark-mode {
    background-color: $color-bg;
  }
  .background {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
  .header {
    position: relative;
    text-align: center;
    background: linear-gradient(60deg, rgb(64, 77, 195) 0%, rgba(0, 172, 193, 1) 100%);
  }
  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }
  /* Animation */
  .parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
  }
  .parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 80px;
      min-height: 80px;
    }
  }
</style>