var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({ model: video}).render();
    this.$el.append(videoView.el);
  },

  template: templateURL('src/templates/videoList.html')

});
