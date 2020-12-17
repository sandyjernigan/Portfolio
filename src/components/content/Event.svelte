<script>
  export let isDarkMode;
  export let type;
  export let timeframe;
  export let header;
  export let location;
  export let phone;
  export let role;
  // export let content;
  export let description = [];
  let contentTxt = "content" + description.length

  // Right or Left Side: True for Left, False for Right
  let rightorleft = true;
</script>

<div class="container left" class:dark-mode={isDarkMode}>

  <!-- Type will determine style of card to use. event.type employment or school -->
  <div class={type}>
    <div class="flip-card">

      <div class="card front">
        <!-- Title is the Timeframe-->
        <p class="timeframe">{timeframe}</p>
        <!-- Display Company or School name -->
        <h2 class="header">{header}</h2>
        <!-- Display Role -->
        <p class="role">{role}</p>

        <!-- Small foot note -->
        <p class="footnote">Hover for more information.</p>
      </div>

      <!-- Reverse side of Card -->
      <div class="card back">
        <!-- Display Company or School name -->
        <h2 class="header">{header}</h2>
        <!-- Display Location -->
        <p class="location">{location}</p>
        <!-- Display Phone Number -->
        {#if phone}
          <p class="phone">{phone}</p>
        {/if}
        <!-- Content -->
        <div class="content">
          <!-- {#if description.length > 3 } -->
          <ul class={contentTxt}>
            {#each description as descriptionTxt}
              <li>{descriptionTxt}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  /* Container around content */
  .container {
    width: 45%;
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    perspective: 1000px;
  }

  @media screen and (min-width: 601px) {
    /* Place the container to the left */
    .container:nth-child(odd) {
      left: -2%;
    }

      /* Add arrows to the left container (pointing right) */
      .container:nth-child(odd)::before {
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
      .dark-mode.container:nth-child(odd)::before {
        border-color: transparent transparent transparent var(--darkcolorbase);
      }

    /* Place the container to the right */
    .container:nth-child(even) {
      left: 48%;
    }

    /* Add arrows to the right container (pointing left) */
    .container:nth-child(even)::before {
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
    .dark-mode.container:nth-child(even)::before {
      border-color: transparent var(--darkcolorbase) transparent transparent;
    }
  }

  /* The actual content */
  .flip-card {
    padding: 20px 30px;
    color: var(--colorbg);
    background-color: var(--colorbase);
    position: relative;
    border-radius: 6px;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .dark-mode .flip-card {
    color: var(--darkcolorbg);
    background-color: var(--darkcolorbase);
  }

  /* Flip Card Effect */
  .container:hover .flip-card {
    transform: rotateY(180deg);
  }

  .front, .back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .back {
    position: absolute;
    top: 10px;
    left: 10px;
    transform: rotateY(180deg);
  }

  /* Format Card */
  .front {
    padding: 30px;
  }
  .timeframe {
    font-size: 1.5rem;
    padding-bottom: 10px;
  }
  .header {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .role {
    font-size: 1.5rem;
    padding-top: 10px;
  }
  .content ul {
    padding-left: 20px;
  }
  .content li {
    text-align: left;
    padding-top: 0.4em;
    list-style-type: disc;
  }
  .content1 li {
    padding-top: 1.5em;
  }
  .content2 li {
    padding-top: 1em;
  }
  .content3 li {
    padding-top: 0.5em;
  }
  .footnote {
    padding-top: 20px;
  }
  .location, .phone {
    font-size: 1.2rem;
    padding: 1px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    
    /* Full-width containers */
    .container {
      width: 90%;
      padding-left: 30px;
      padding-right: 25px;
    }
    
    /* Make sure that all arrows are pointing leftwards */
    .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
    }
    
    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }


</style>