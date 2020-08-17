<script>
  // Idea for Mobile Menu from: https://codepen.io/karlovidek/pen/aNYWKE/
  
	import { viewMenu } from '../../styles.js'
  export let isDarkMode;

  // Menu click event
  function handleMenuClick() { 
    viewMenu.update(viewMenu => !viewMenu)
  };
</script>

<nav class:dark-mode={isDarkMode} class:viewMenu={$viewMenu} on:click={handleMenuClick}>
  <span class="menu_toggle">
    <i class="menu_open fa fa-bars fa-lg"></i>
    <i class="menu_close fa fa-times fa-lg"></i>
  </span>
  <ul class="menu_items">
    <li><a href="#title"><i class="icon fa fa-home fa-2x"></i> Home</a></li>
    <li><a href="#resume"><i class="icon fa fa-tasks fa-2x"></i> Resume</a></li>
    <li><a href="#projects"><i class="icon fa fa-heart fa-2x"></i> Projects</a></li>
  </ul>
</nav>

<style type="text/scss">
	// Color Scheme
  @import '../scss/animations.scss';
  
  $snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);
  $bounce: cubic-bezier(0.175, 0.885, 0.320, 1.275);

  nav {
    z-index: 900;
    position: fixed;
    top: 0;
    left: 0;

    @media(max-height:200px) {
      display: none;
    }
  }

  .menu_toggle {
    display: block;
    cursor: pointer;
    width: 100px;
    height: 80px;
    background-color: var(--colorbg);
    border-bottom-right-radius: 100%;
    
    &:active {
      i {
        opacity: 0.8
      }
    }  
    i {
      color: var(--colorbase);
    }
    .menu_open,
    .menu_close {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -15px;
      margin-left: -12px;
      transition: transform .7s $snap;
    }
    .menu_open {
      transform-origin: -100px -100px;
    }
    .menu_close {
      transform: rotate(20deg);
      transform-origin: -100px -160px;
    }
  }
  .menu_items {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: right;
    position: fixed;
    bottom: 0;
    left: -40px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 50vh;
    transform-origin: top right;
    transform: rotate(-40deg);
    
    li {
      z-index: -1;
      font-size: 3vh;
      transform: translateX(-300px);
      transition: transform .7s 0s $snap;
      margin-bottom: 10%;
      text-align: right;
      opacity: 0;
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--darkcolorbase);
      filter: brightness(85%);
      transition: color .2s;
      
      .icon {
        position: relative;
        display: inline-block;
        margin-right: 20px;
        color: var(--darkcolorbase);
      }      
      &:hover {
        filter: grayscale(80%);
        filter: brightness(200%);
        
        color: var(--darkcolorbase);
      }
      &:active {
        .icon {
          filter: grayscale(80%);
          filter: brightness(200%);
        }
      }
    }
  }
  
  // Dark Mode
  nav.dark-mode {
    .menu_toggle {
      background-color: var(--darkcolorbg);
      i {
        color: var(--darkcolorbase);
      }
    }
    .menu_items {
      a {
        color: var(--colorbase);
        filter: brightness(85%);      
        .icon {
          color: var(--colorbase);
          &:after {
            border: 2px solid var(--colorbase);
          }
        }        
        &:hover {
          color: var(--colorbase);
          .icon {
            &:after {
              border-color: var(--colorbase);
            }
          }
        }
        &:active {
          .icon {
            color: var(--colorbase);
          }
        }
      }
    }
  }

  // View Menu
  nav.viewMenu {
    .menu_open {
      transform: rotate(-20deg);
    }
    .menu_close {
      transform: rotate(0);
    }
    .menu_items {
      li {
        @include fadeIn(1.5s);
        z-index: 99;
        display: block;
        transform: translateX(0) rotate(40deg);
        transition: transform .35s .45s $bounce;
      
        &:nth-child(2){
          transition-delay: .47s;
        }
        &:nth-child(3){
          transition-delay: .48s;
        }
      }
    }
  }
</style>