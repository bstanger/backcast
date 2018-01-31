var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('hack reactor');
    this.listenTo(this.videos, 'sync', this.render);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({ 
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    this.searchView = new SearchView({
      el: this.$('.search'),
      collection: this.videos,
      query: this.searchView ? this.searchView.query : ''
    });
    this.searchView.render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
