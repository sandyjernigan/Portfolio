<script>
  import { onMount } from 'svelte';
  
	onMount(() => {
    let page = document.getElementById('page');
    let nav = document.getElementsByTagName('nav');
  });

  // Menu click event
  function handleMenuClick() { 
    console.log("click")
    page.toggleClass('shazam');
    nav.toggleClass('shazam');
  };

  // elements
  // var page = $('.page');

  // $('.menu_toggle').on('click', function(){
  //   page.toggleClass('shazam');
  // });

  // $('.content').on('click', function(){
  //   page.removeClass('shazam');
  // });
</script>

<nav class="dark-mode">
  <span class="menu_toggle" on:click={handleMenuClick}>
    <i class="menu_open fa fa-bars fa-lg"></i>
    <i class="menu_close fa fa-times fa-lg"></i>
  </span>
  <ul class="menu_items">
    <li><a href="#title"><i class="icon fa fa-signal fa-2x"></i> Title</a></li>
    <li><a href="#title"><i class="icon fa fa-coffee fa-2x"></i> Coffee</a></li>
    <li><a href="#title"><i class="icon fa fa-heart fa-2x"></i> Please</a></li>
  </ul>
</nav>

<style type="text/scss">
	// Color Scheme
	$color-base: #212F3D;
	$color-bg: #EBEDEF;
	$color-light: lighten($color-base, 60%);

	$dark-color-base: #EBEDEF;
	$dark-color-bg: #212F3D;
  $dark-color-light: lighten($color-bg, 60%);
  
  $nav: $dark-color-bg;
  $snap: cubic-bezier(1.000, 0.005, 0.240, 1.000);
  $bounce: cubic-bezier(0.175, 0.885, 0.320, 1.275);

  /* basically all styling from now on */
  .menu_toggle {
    z-index: 900;
    position: fixed;
    top: 0;
    left: 0;
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
    position: fixed;
    bottom: 0;
    left: 50px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    
    li {
      height: 60px;
      margin-bottom: 30px;
      transform: translateX(-300px);
      transition: transform .7s 0s $snap;
      
      &:nth-child(2){
        margin-left: 40px;
      }
      &:nth-child(3){
        margin-left: 80px;
      }
    }
    a {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: darken($color-base, 30%);
      transition: color .2s;
      
      .icon {
        position: relative;
        display: inline-block;
        margin-right: 25px;
        color: $color-base;

        &:after {
          position: absolute;
          top: 50%;
          left: 50%;
          content: '';
          display: block;
          width: 60px;
          height: 60px;
          margin-left: -33px;
          margin-top: -32px;
          border-radius: 100%;
          border: 2px solid $color-base;
          transition: border-color .2s;
        }
      }
      
      &:hover {
        color: $color-base;
        .icon {
          &:after {
            border-color: $nav;
          }
        }
      }
      &:active {
        .icon {
          color: $nav;
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
  }

  /* Let's open up the menu */
  .shazam {
    color: red;
    .content {
      color: red;
      transform: rotate(-30deg);
    }
    
    // this will show hidden content overflow when rotated,
    // but will result in a jump, if you've already scrolled down the content
    // plus, you will lose your current reading position
    // fixable with JS, not gonna bother
    
    /*.content_inner {
      height: 100%;
    }*/
    
    .menu_open {
      color: red;
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