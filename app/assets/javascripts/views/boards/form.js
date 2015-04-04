TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],
  tagName: 'form',
  events: {
    "submit": "handleSubmit"
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var attr = this.$el.serializeJSON();
    var board = new TrelloClone.Models.Board();
    board.save(attr, {
      success: function (model) {
        this.collection.add(model);
      }.bind(this)
    })
  }
});
