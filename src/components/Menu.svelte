<script>
	import { viewMenu, darkmode } from '../styles.js'

  // Menu click event
  function handleMenuClick() { 
    viewMenu.update(viewMenu => !viewMenu)
  };
</script>

<nav class:dark-mode={$darkmode} class:viewMenu={$viewMenu} on:click={handleMenuClick}>
  <span class="menu_toggle">
    <i class="menu_open fa fa-bars fa-lg"></i>
    <i class="menu_close fa fa-times fa-lg"></i>
  </span>
  <ul class="menu_items">
    <li><a href="#title"><i class="icon fa fa-home fa-2x"></i> Home</a></li>
    <li><a href="#title"><i class="icon fa fa-tasks fa-2x"></i> Resume</a></li>
    <li><a href="#title"><i class="icon fa fa-heart fa-2x"></i> Projects</a></li>
  </ul>
</nav>

<style type="text/scss">
	// Color Scheme
  @import '../scss/colorscheme.scss';
  
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
    background-color: $color-bg;
    border-bottom-right-radius: 100%;
    
    &:active {
      i {
        opacity: 0.8
      }
    }  
    i {
      color: $color-base;
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
    justify-content: space-between;
    align-items: left;
    position: fixed;
    bottom: 10px;
    left: 2%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    @media(min-height:450px) {
      height: 50%;
    }
    
    li {
      display: block;
      transform: translateX(-300px);
      transition: transform .7s 0s $snap;
      margin-bottom: 10%;
      @media(max-height:400px) {
        margin-bottom: 5%;
      }

      &:nth-child(2) {
        margin-left: 40px;
        @media(max-height:400px) {
          margin-left: 10px;
        }
      }
      &:nth-child(3) {
        margin-left: 80px;
        @media(max-height:400px) {
          margin-left: 20px;
        }
      }
    }
    a {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: darken($dark-color-base, 30%);
      transition: color .2s;

      @media(max-height:400px) {
        font-size: 80%
      }
      @media(max-height:280px) {
        font-size: 40%
      }

      i {
        font-size: 200%;
      }
      
      .icon {
        position: relative;
        display: inline-block;
        margin-right: 20px;
        color: $dark-color-base;

        @media(max-height:400px) {
          margin-right: 5px;
        }

        // &:after {
        //   position: absolute;
        //   top: 50%;
        //   left: 50%;
        //   content: '';
        //   display: block;
        //   width: 200%;
        //   height: 200%;
        //   margin-left: -100%;
        //   margin-top: -100%;
          // border-radius: 50%;
          // border: 2px solid $dark-color-base;
        //   transition: border-color .2s;
        // }
      }
      
      &:hover {
        filter: grayscale(80%);
        filter: brightness(200%);
        
        color: $dark-color-base;
        // .icon {
        //   &:after {
        //     border-color: $dark-color-base;
        //   }
        // }
      }
      &:active {
        .icon {
          filter: grayscale(80%);
          filter: brightness(200%);
        }
      }
    }
  }
  
  nav.dark-mode {
    .menu_toggle {
      background-color: $dark-color-bg;
      i {
        color: $dark-color-base;
      }
    }
    .menu_items {
      a {
        color: darken($color-base, 30%);        
        .icon {
          color: $color-base;
          &:after {
            border: 2px solid $color-base;
          }
        }        
        &:hover {
          color: $color-base;
          .icon {
            &:after {
              border-color: $color-base;
            }
          }
        }
        &:active {
          .icon {
            color: $color-base;
          }
        }
      }
    }
  }

  /* Let's open up the menu */
  nav.viewMenu {
    .menu_open {
      transform: rotate(-20deg);
    }
    .menu_close {
      transform: rotate(0);
    }
    .menu_items {
      li {
        transform: translateX(0);
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