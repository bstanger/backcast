var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.video = this.collection ? this.collection.models[0] : undefined;
    this.collection.on('select', function(e) {
      this.video = e;
      this.render();
    }, this);
  },

  render: function(model) {
    if (this.video) {
      this.$el.html(this.template(this.video.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
