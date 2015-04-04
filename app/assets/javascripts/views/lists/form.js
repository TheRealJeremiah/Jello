TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/form'],
  tagName: 'form',
  className: 'in-page-form',
  events: {
    'submit': 'handleSubmit'
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var attr = this.$el.serializeJSON();
    attr['board_id'] = this.model.id;
    var list = new TrelloClone.Models.List();
    list.save(attr, {
      success: function (model) {
        this.collection.add(model);
      }.bind(this)
    })
  }
});
