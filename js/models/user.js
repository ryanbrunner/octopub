var User = GitHubModel.extend({
  urlRoot: "https://api.github.com/users",

  initialize: function() {
    this.repos = new UserRepos();
    this.repos.user = this;
  },
  
});

// Class methods for user.
_.extend(User, {
  _current_user: null,
  _current_password: null, 

  current: function() {
    return User._current_user || null;
  },

  authenticate: function(userName, password) {
    _current_user = new User({ id: userName });
    _current_password = password;
  }
})