TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["cards/show"],
  className: "list-card",
  events: {
    "click .remove-card": "remove"
  },
  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);
    this.$el.attr('id', this.model.get('ord'));
    return this;
  },
  remove: function (event) {
    this.model.destroy();
  }
});
