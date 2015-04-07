TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/form'],
  tagName: 'form',
  className: 'in-page-card-form',
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
    attr['list_id'] = this.model.id;
    var list = new TrelloClone.Models.Card();
    list.save(attr, {
      success: function (model) {
        this.collection.add(model);
      }.bind(this)
    })
  }
});
