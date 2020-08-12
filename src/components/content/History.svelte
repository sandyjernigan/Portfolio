<script>
  export let isDarkMode;
  export let timeline;
</script>

<div class="timeline" class:dark-mode={isDarkMode}>
  <div class="year"><h2>{timeline[0].year}</h2></div>

  <div class="container left">
    <div class="content"> 
      <h2>{timeline[0].year}</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
</div>


<style>
  * {
    box-sizing: border-box;
  }
  .dark-mode div {
    color: var(--darkcolorbase);
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 10px;
    border-radius: 5px;
    background-color: var(--colorbase);
    background-image: linear-gradient(var(--colorbg), var(--colorbase) 15%, var(--colorbase) 70%, var(--colorbase), var(--colorbg));
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  .dark-mode.timeline::after {
    background-color: var(--darkcolorbase);
    background-image: linear-gradient(var(--darkcolorbg), var(--darkcolorbase) 15%, var(--darkcolorbase) 70%, var(--darkcolorbase), var(--darkcolorbg));
  }

  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  /* The circles on the timeline */
  .container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: var(--colorbase);
    border: 4px solid var(--green);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  .dark-mode .container::after {
    background-color: var(--darkcolorbase);
    border: 4px solid var(--orange);
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid var(--colorbase);
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent var(--colorbase);
  }
  .dark-mode .left::before {
    border-color: transparent transparent transparent var(--darkcolorbase);
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid var(--colorbase);
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--colorbase) transparent transparent;
  }
  .dark-mode .right::before {
    border-color: transparent var(--darkcolorbase) transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* Year Container */
  .year {
    opacity: 1;
    z-index: 2;
    position: relative;
    border-radius: 15px;
    min-width: 150px;
    width: 10%;
    left: 50%;
    transform: translateX(-75px);
    padding: 0;
    margin: 15px 0;
    color: var(--colorbase);
    /* background-color: rgba(255, 255, 255, 0.5); */
  }

  div.year h2 {
    color: var(--colorbase);
    opacity: 1;
    font-size: 3em;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bolder;
    text-align: center;
    white-space: nowrap;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
  .dark-mode div.year h2 {
    color: var(--darkprimarycolor);
    filter: brightness(150%);
    text-shadow: 1px 1px 5px black, 0 0 25px var(--darkcompcolor), -1px -1px 5px var(--darkcolorbg), 0 0 20px var(--darkcolorbg);
  }

  /* The actual content */
  .content {
    padding: 20px 30px;
    color: var(--colorbg);
    background-color: var(--colorbase);
    position: relative;
    border-radius: 6px;
  }
  .dark-mode .content {
    color: var(--darkcolorbg);
    background-color: var(--darkcolorbase);
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    /* Place the timelime to the left */
    .timeline::after {
    left: 31px;
    }
    
    /* Full-width containers */
    .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    }
    
    /* Make sure that all arrows are pointing leftwards */
    .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after, .right::after {
    left: 15px;
    }
    
    /* Make all right containers behave like the left ones */
    .right {
    left: 0%;
    }
  }


</style>