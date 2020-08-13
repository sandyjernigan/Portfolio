<script>
  export let isDarkMode;
  export let type;
  export let timeframe;
  export let header;
  export let location;
  export let phone;
  export let role;
  export let content;

  // Right or Left Side: True for Left, False for Right
  let rightorleft = true;
</script>

<div class="container left" class:dark-mode={isDarkMode}>
  <!-- Type will determine style of card to use. event.type employment or school -->
  <div class="content">
    <!-- Title is the Timeframe-->
    <p class="timeframe">{timeframe}</p>
    <!-- Display Company or School name -->
    <h2 class="header">{header}</h2>
    <!-- Display Role -->
    <p class="role">{role}</p>

    <!-- Small foot note -->
    <p class="footnote">Hover for more information.</p>

    <!-- Reverse side of Card -->
    <div class="card back">
      <!-- Display Company or School name -->
      <h2 class="header">{header}</h2>
      <!-- Display Location -->
      <p class="location">{location}</p>
      <!-- Display Phone Number -->
      <p class="phone">{phone}</p>
      <!-- Content -->
      <p class="content">{content}</p>
    </div>
  </div>
</div>


<style>
  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 45%;
  }

  /* The circles on the timeline */
  /* .container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -1px;
    background-color: var(--colorbase);
    border: 4px solid var(--green);
    top: 15px;
    border-radius: 50%;
    z-index: 0;
  }
  .dark-mode.container::after {
    background-color: var(--darkcolorbase);
    border: 4px solid var(--orange);
  } */

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

  /* Fix the circle for containers on the right side */
  /* .container:nth-child(even)::after {
    left: -16px;
  } */

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

  .back {
    display: none;
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