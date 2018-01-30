var SearchView = Backbone.View.extend({

  el: '.search',

  events: {
    'click .search-bar .btn': 'search' 
  },

  search: function() {
    var query = this.$('.form-control').val();
    this.collection.search(query);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
