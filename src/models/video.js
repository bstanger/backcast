var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // this.set('selected', false);
  },

  select: function() {
    this.trigger('select', this);
  }

});
