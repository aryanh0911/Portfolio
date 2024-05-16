<script>
    export let cardGroupHovered = false;
    export let cardHovered = false;
</script>
  
  <div id="charizard" class="{cardGroupHovered? 'card-group-hovered':''} {cardHovered? 'card-hovered':''}"></div>
  
<style>
    #charizard {
      width: 12vmin;
      position: absolute;
      top: 50%;
      left: 50%;
      aspect-ratio: 5/7;
      transition: transform 800ms cubic-bezier(.28, .93, .34, .85), opacity .4s, z-index .8s;
      background-image: url("https://www.serebii.net/card/pokemondetectivepikachu/5.jpg");
      background-position: center;
      background-size: cover;
      /* transform: translate(-50%, -50%); */
      border: 2px solid rgba(255, 255, 255, 0.434);
      border-radius: 1vmin;
      backdrop-filter: blur(10px);
      box-shadow: -10px 10px 20px black;
    }
  
    .card-group-hovered {
      opacity: .6;  
      transform: translate(200%, -160%) rotate(-15deg);
    }
    
    .card-hovered {
        opacity: 1;
        z-index: 99;
    }
</style>
  