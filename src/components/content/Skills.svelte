<script>
  // Orginial CSS Menu at https://codepen.io/jouanmarcel/pen/NLgVjm
  // Created by Jouan Marcel
  // https://jouanmarcel.com

  export let explainer;
  export let lefter;
  export let left;
  export let center;
  export let right;
  export let righter;
  export let isDarkMode;

</script>

<section class:dark-mode={isDarkMode}>
  <h1>My Skills include...</h1>
  <div class="skills" class:dark-mode={isDarkMode}>
    {#if lefter}
      <div class="lefter" style="background-image:url({lefter.image})">
        {#if lefter.text} <div class="text">{lefter.text}</div> {/if}
      </div>
    {/if}
    <div class="left" style="background-image:url({left.image})">
        {#if left.text} <div class="text">{left.text}</div> {/if}
    </div>
    <div class="center" style="background-image:url({center.image})">
      <div class="explainer"><span>{explainer}</span></div>
        {#if center.text} <div class="text">{center.text}</div> {/if}
      </div>
    <div class="right" style="background-image:url({right.image})">
        {#if right.text} <div class="text">{right.text}</div> {/if}
    </div>
    <div class="righter" style="background-image:url({righter.image})">
        {#if righter.text} <div class="text">{righter.text}</div> {/if}
    </div>
  </div>
</section>

<style type="text/scss">
  section {
    width: 100%;
    height: 50vh;
		min-height: 280px;
  }
	h1 {
    color: var(--colorbase);
		font-size: 2rem;
		font-weight: 300;
		letter-spacing: 2px;
		line-height: 4rem;
		padding: 1rem 2rem;
	}
  .dark-mode h1 {
    color: var(--darkcolorbase);
  }
  .skills {
    display: flex;
    width: 100%;
    perspective: 10px;
    transform: perspective(300px) rotateX(20deg);
    will-change: perspective;
    perspective-origin: center center;
    transition: all 1.3s ease-out;
    align-content: stretch;
    justify-content: center;
    transform-style: preserve-3d;
    margin-bottom: 5vh;
  }
  .skills:hover {
    perspective: 1000px;
    transition: all 1.3s ease-in;
    transform: perspective(10000px) rotateX(0deg);
    .text {
      opacity: 1;
    }
    & > div {
      opacity: 1;
      transition-delay: 0s;
    }
    .explainer {
      opacity: 0;
    }
  }

  .left, .center, .right, .lefter, .righter {
    width: 15vw;
    height: 15vw;
    transform-style: preserve-3d;
    border-radius: 10px;
    border: 2px solid var(--colorbase);
    opacity: 0;
    transition: all .3s ease;
    transition-delay: 1s;
    position: relative;
    background-position: center center;
    background-size: 75%;
    background-repeat: no-repeat;
    background-color: rgba(100, 100, 255, .4);
    cursor: pointer;
    background-blend-mode: hard-light;
    text-align: center;
    
    &:hover {
      box-shadow: 0 0 15px 5px rgba(100, 100, 255, .6);
      background-color: rgba(100, 100, 255, .8);
    }
  }
  .dark-mode .left, .dark-mode .center, .dark-mode .right, .dark-mode .lefter, .dark-mode .righter {
    background-color: rgba(100, 100, 255, .8);
    border: 2px solid var(--darkcolorbase);
  }
  i {
    padding: 1vw;
    width: 14vw;
    height: 14vw;
  }
  .text {
    transform: translateY(30px);
    opacity: 0;
    transition: all .3s ease;
    bottom: 0;
    left: 5px;
    position: absolute;
    will-change: transform;
    color: var(--colorbase);
    text-shadow: 0 0 5px rgba(100, 100, 255, .6)
  }
  .dark-mode .text {
    color: var(--darkcolorbase);
  }
  .lefter {
    transform: translateX(-60px) translateZ(-50px) rotateY(-10deg);
  }
  .left {
    transform: translateX(-30px) translateZ(-25px) rotateY(-5deg);
  }
  .center {
    opacity: 1;
  }
  .right {
    transform: translateX(30px) translateZ(-25px) rotateY(5deg);
  }
  .righter {
    transform: translateX(60px) translateZ(-50px) rotateY(10deg);
  }
  .explainer {
    font-weight: 300;
    font-size: 2rem;
    color: #fff;
    transition: all .6s ease;
    width: 100%;
    height: 100%;
    background-color: #303050;
    background-image: radial-gradient(circle at center top, #cce, #33a);
    border-radius: 10px;
    text-shadow: 0 0 10px rgba(255, 255, 255, .8);
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ref {
    background-color: #000;
    background-image: linear-gradient(to bottom, #d80, #c00);
    border-radius: 3px;
    padding: 7px 10px;
    position: absolute;
    font-size: 16px;
    bottom: 10px;
    right: 10px;
    color: #212F3D;
    text-decoration: none;
    text-shadow: 0 0 3px rgba(0, 0, 0, .4);
    &::first-letter {
      font-size: 12px;
    }
  }
</style>