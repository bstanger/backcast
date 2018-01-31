var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    if (this.collection.length > 0) {
      this.video = this.collection.models[0];
      this.video.select();
      this.listenTo(this.collection, 'select', function(e) {
        this.video = e;
        this.render();
      });
    } else {
      this.video = undefined;
    }
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
