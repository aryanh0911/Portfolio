<script>
    export let hovered = false;
  </script>
  
  <div id="charizard" class="little-card card {hovered ? 'hovered' : ''}"></div>
  
  <style>
    #charizard {
      background-image: url("https://www.serebii.net/card/pokemondetectivepikachu/5.jpg");
      background-position: center;
      background-size: cover;
    }
  
    .hovered {
      transform: translate(200%, -160%) rotate(-15deg);
    }
  </style>
  