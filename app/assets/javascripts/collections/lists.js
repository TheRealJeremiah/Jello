TrelloClone.Collections.Lists = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.board = options.board;
  },
  url: function () {
    return this.board.url()
  },
  parse: function (response, options) {
    return response.lists;
  },
  model: TrelloClone.Models.List
})
