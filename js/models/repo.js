var Repo = GitHubModel.extend({
  
});

var UserRepos = GitHubCollection.extend({
  user: null,

  url: function() {
    return "https://api.github.com/users/" + this.user.id + "/repos";
  }
});