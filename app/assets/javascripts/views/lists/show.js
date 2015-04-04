TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  className: 'panel panel-primary boardList',
  events: {
    'click .remove-list': 'handleRemove'
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  render: function () {
    var content = this.template({list: this.model});
    this.$el.html(content);
    return this;
  },
  handleRemove: function () {
    this.model.destroy();
  }
});
