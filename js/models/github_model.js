var GitHubModel = RemoteModel.extend({
  parse: function(response) {
    return response.data;
  }
});