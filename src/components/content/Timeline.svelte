<script>
  import Event from "./Event.svelte";
  export let isDarkMode;
  export let timeline;

  // Right or Left Side: True for Left, False for Right
  let rightorleft = true;
</script>


<div class="timeline" class:dark-mode={isDarkMode}></div>

<div class="events" class:dark-mode={isDarkMode}>
  <h1>Work and School History</h1>
  <p>Hover over event for more information.</p>
  <!-- Loop thru timeline from info.js -->
  {#each timeline as year}
    <!-- Display Title or Year -->
    <div class="year"><h2>{year.year}</h2></div>

    <!-- Loop thru year, get each event in that year -->
    {#each year.events as details}
      <Event {...details} {isDarkMode} />
      <div class="clear"></div>
    {/each}
  {/each}
</div>


<style>
  * {
    box-sizing: border-box;
  }
  .dark-mode {
    color: var(--darkcolorbase);
  }
  .events {
    position: fixed;
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
    height: 80%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .events::-webkit-scrollbar {
    display: none;
  }
  .events h1 {
    padding-top: 8%;
    color: var(--colorbase);
    opacity: 1;
    font-size: 4em;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bolder;
    text-align: center;
    white-space: nowrap;
    text-shadow: 1px 1px 5px var(--colorbg), 0 0 25px var(--colorbg), -1px -1px 5px var(--purple), 0 0 20px var(--colorbg);
  }
  .dark-mode .events h1, .dark-mode .events p {
    color: var(--darkprimarycolor);
    filter: brightness(150%);
    text-shadow: 1px 1px 5px black, 0 0 25px var(--darkpurple), -1px -1px 5px var(--darkcolorbg), 0 0 10px var(--darkcolorbg);
  }
  .events p {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: var(--colorbase);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-shadow: 1px 1px 5px var(--colorbg), 0 0 25px var(--colorbg), -1px -1px 5px var(--purple), 0 0 20px var(--colorbg);
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: fixed;
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
    height: 80%;
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
  .clear { clear:both; display:block; overflow:hidden; visibility:hidden; height:0px;}

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
    text-shadow: 1px 1px 5px var(--colorbg), 0 0 25px var(--colorbg), -1px -1px 5px var(--purple), 0 0 20px var(--colorbg);
  }
  .dark-mode div.year h2 {
    color: var(--darkprimarycolor);
    filter: brightness(150%);
    text-shadow: 1px 1px 5px black, 0 0 25px var(--darkpurple), -1px -1px 5px var(--darkcolorbg), 0 0 10px var(--darkcolorbg);
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