TrelloClone.Collections.Lists = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.board = options.board;
  },

  parse: function (response, options) {
    return response;
  },

  model: TrelloClone.Models.List
})
