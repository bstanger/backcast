var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('hack reactor');
    this.videos.on('sync', this.render, this);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ collection: this.videos }).render();
    new VideoPlayerView({ collection: this.videos }).render();
    new SearchView({ el: this.$('.search'), collection: this.videos }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
