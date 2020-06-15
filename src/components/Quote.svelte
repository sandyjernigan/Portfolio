<script>
	export let quote;
	export let quoteby;
</script>

<div>
  <div class="header-quote">
    <blockquote>
      {quote}
      <span class="author"><i>
        {quoteby}
      </i></span>
    </blockquote>
  </div>
</div>

<style type="text/scss">
  div {
		display: flex;
		justify-content: center;
		align-items: center;
  }

  @import url(https://fonts.googleapis.com/css?family=Bitter);

  * {
    box-sizing: border-box;
  }

  blockquote {
    position: relative;
    display: inline-block;
    background: #eee;
    padding: 40px 30px 30px 60px;
    border-radius: 10px;
    font-family: 'Bitter', serif;
    color: #333;
    text-align: left;
    
    box-shadow: 1px 1px 1px #999,
                2px 2px 1px #999,
                3px 3px 1px #999;
    transition-duration: .3s;
    
    span.author {
      position: relative;
      display: block;
      text-align: right;
      margin-top: 5px;
      color: #999;
      
      i {
        position: relative;
        background: #eee;
        padding-left: 5px;
        font-style: italic;
        z-index: 5;
      }
      
      &::before {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #ccc;
        z-index: 1;
      }
    }
    
    &:hover {
      box-shadow: 1px 1px 5px #999,
                  2px 2px 6px #999,
                  3px 3px 7px #999;
    }
    
    &::before {
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      content: "\"";
      font-family: 'Bitter', serif;
      font-size: 120px;
      color: #999
    }
  }
</style>