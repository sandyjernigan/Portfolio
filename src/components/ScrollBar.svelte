<style>
  .progress-container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #ccc;
    color: black;
  }

  .progress-bar {
    height: 8px;
    background: #4caf50;
    width: 0%;
  }
</style>

<div class="progress-container"> 

<div>
scroll -- 
{document.documentElement.scrollHeight}
{document.documentElement.clientHeight}
{document.documentElement.scrollTop}
{document.body.scrollTop}
{el}

</div>

  <div class="progress-bar" id="myBar"></div>
</div>  

<script>
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
  const el = document.querySelector('#home')

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
</script>