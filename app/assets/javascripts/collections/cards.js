// not correct, where to get cards?
TrelloClone.Collections.Cards = Backbone.Collection.extend({
  comparator: function (card) {
    return card.get('ord');
  },
  
  initialize: function (models, options) {
    this.list = options.list;
  },

  url: function () {
    this.list.url();
  },

  parse: function (response, options) {
    return response;
  },
  model: TrelloClone.Models.Card
})
