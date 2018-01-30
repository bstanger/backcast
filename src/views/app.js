var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ collection: this.videos }).render();
    new VideoPlayerView({ model: this.videos.models[0] }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
