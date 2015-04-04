TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',
  lists: function () {
    this._lists = this._lists || new TrelloClone.Collections.Lists({}, {board: this});
    return this._lists;
  }
})
