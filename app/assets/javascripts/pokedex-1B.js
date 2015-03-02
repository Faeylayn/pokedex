Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  this.$pokeDetail.append("<ul class='detail'></ul>")
  var $detail = this.$pokeDetail.find(".detail")
  console.log(pokemon)
  this.$pokeDetail.append("<li><img src='../" + pokemon.get("image_url") + "'></li>")
  var methods = [
    "id",
    "attack",
    "defense",
    "moves",
    "name",
    "poke_type"
  ]

  for (var i = 0; i < methods.length; i++ ) {
    var attributeString = pokemon.escape(methods[i]);
    $detail.append("<li>" + attributeString + "</li>");
  }


};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {

  this.$pokeDetail.children().remove();
  var $targ = $(event.currentTarget)

  var pokemon = new Pokedex.Models.Pokemon({id: $targ.attr("data-id")})
  pokemon.fetch({
  success: function () {
    Pokedex.rootView.renderPokemonDetail(pokemon);
  }
})



};
