var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('hack reactor');
    this.videos.on('sync', this.render, this);
    this.searchView;
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ collection: this.videos }).render();
    new VideoPlayerView({ collection: this.videos }).render();
    if (this.searchView) {
      this.searchView = new SearchView({ el: this.$('.search'), collection: this.videos, query: this.searchView.query});  
    } else {
      this.searchView = new SearchView({ el: this.$('.search'), collection: this.videos});
    }
    this.searchView.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
