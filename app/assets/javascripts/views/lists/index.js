TrelloClone.Views.ListIndex = Backbone.View.extend({
  // template: JST['lists/index'],
  tagName: 'div',
  className: 'listIndex group',
  initialize: function () {
    this.listenTo(this.collection, 'sync remove', this.render);
    this.collection.fetch()
  },
  render: function () {
    // var content = this.template();
    // this.$el.html(content);
    this.$el.empty();
    this.collection.each(function(list) {
      var listShow = new TrelloClone.Views.ListShow({model: list})
      this.$el.append(listShow.render().$el);
    }.bind(this));
    return this;
  }
});
