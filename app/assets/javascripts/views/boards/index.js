TrelloClone.Views.BoardIndex = Backbone.View.extend({
  template: JST['boards/index'],
  tagName: 'div',
  className: 'boardIndex',
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function () {
    var content = this.template({boards: this.collection});
    this.$el.html(content);
    var form = new TrelloClone.Views.BoardForm({collection: this.collection});
    this.$el.append(form.render().$el)
    return this;
  }
});
