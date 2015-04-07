TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  className: 'panel panel-primary boardList',
  events: {
    'click .remove-list': 'handleRemove',
    'click .card-form': 'handleCardFormToggle'
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'sync remove', this.render);
    this.hasForm = false;
  },
  render: function () {
    var content = this.template({list: this.model});
    this.$el.html(content);
    var $listCards = this.$el.find(".list-cards");
    $listCards.html('');
    this.model.cards().each(function (card) {
      var cardView = new TrelloClone.Views.CardShow({model: card});
      $listCards.append(cardView.render().$el);
    }, this);
    $listCards.sortable({
      stop: function () {
        console.log('hi');
      }
    });
    this.$el.append("<div class='card-form'>hi</div>");
    this.hasForm = false;
    return this;
  },
  handleRemove: function () {
    this.model.destroy();
  },
  handleCardFormToggle: function (event) {
    if (!this.hasForm) {
      this.hasForm = true;
      var formView = new TrelloClone.Views.CardForm({
        model: this.model,
        collection: this.model.cards()});
      this.$el.find('.card-form').html(formView.render().$el);
    }
  }
});
