var GitHubModel = RemoteModel.extend({
  parse: function(response) {
    return response.data;
  }
});

var GitHubCollection = RemoteCollection.extend({
  parse: function(response) {
    console.log(response);
    return response.data;
  }
});