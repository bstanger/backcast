var SearchView = Backbone.View.extend({

  events: {
    'click button': 'search',
    'keyup input': 'search' 
  },

  search: function(e) {
    var query = this.$('input').val();
    if (e.currentTarget.tagName === 'BUTTON' || e.type === 'keyup' && e.keyCode === 13) {
      this.collection.search(query);
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
