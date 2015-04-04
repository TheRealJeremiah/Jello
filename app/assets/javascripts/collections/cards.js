TrelloClone.Collections.Cards = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.list = options.list;
  },
  url: function () {
    return this.list.url()
  },
  parse: function (response, options) {
    return response.cards;
  },
  model: TrelloClone.Models.Card
})
