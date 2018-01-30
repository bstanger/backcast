var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.debouncedSearch = _.debounce(function(query) {
      this.executeSearch(query);
    }, 500, true);
  },

  search: function(query) {
    this.debouncedSearch(query);
  },

  executeSearch: function(query) {
    var self = this;
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        q: query,
        maxResults: 5,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video'
      },
      success: function(response) {
        if (response.items.length) {
          self.reset(response.items);
          self.trigger('sync', self);
        }
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
