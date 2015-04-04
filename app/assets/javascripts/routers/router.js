TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'boards/:id': 'show'
  },

  initialize: function (options) {
    this.$rootEl = $(options.$rootEl);
  },

  index: function () {
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();
    var view = new TrelloClone.Views.BoardIndex({collection: boards});
    this.$rootEl.html(view.render().$el)
  },

  show: function (id) {
    var board = new TrelloClone.Models.Board({id: id});
    board.fetch();
    var view = new TrelloClone.Views.BoardShow({model: board});
    this.$rootEl.html(view.render().$el)
  }
})
