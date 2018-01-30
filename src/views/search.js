var SearchView = Backbone.View.extend({

  initialize: function(options) {
    this.query = options.query || '';
  },

  events: {
    'click button': 'search',
    'keyup input': 'search' 
  },

  search: function(e) {
    this.query = this.$('input').val();
    if (e.currentTarget.tagName === 'BUTTON' || e.type === 'keyup' && this.query.length > 3) {
      this.collection.search(this.query);
    }
  },

  render: function() {
    this.$el.html(this.template(this));
    return this;
  },

  template: templateURL('src/templates/search.html')

});
