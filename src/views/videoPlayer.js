var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.video = this.collection.models[0];
    this.collection.on('select', function(e) {
      this.video = e;
      this.render();
    }, this);
  },

  el: '.player',

  render: function(model) {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.video.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
