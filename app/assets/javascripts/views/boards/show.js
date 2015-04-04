TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    var listsView = new TrelloClone.Views.ListIndex({collection: this.model.lists()});
    this.$el.append(listsView.render().$el);
    var listForm = new TrelloClone.Views.ListForm({model: this.model, collection: this.model.lists()})
    this.$el.append(listForm.render().$el);
    return this;
  }
});
