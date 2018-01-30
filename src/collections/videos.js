var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        q: query,
        maxResults: 5,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true
      },
      success: function(response) {
        console.log(response);
      }
    });
  },

});
