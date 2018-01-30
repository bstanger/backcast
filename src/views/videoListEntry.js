var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   this.selected = false;
  // },

  events: {
    'click .video-list-entry-title': 'handleTitleClick'
  },

  handleTitleClick: function() {
    this.model.select();
  },

  // select: function() {
  //   this.model.set('selected', true);
  //   // if (this.model.get('selected')) {
  //   //   this.model.set('selected', false);
  //   // } else {
  //   //   this.model.set('selected', true);
  //   // }
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
