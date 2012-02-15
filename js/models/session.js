var Session = Backbone.Model.extend({
  defaults: {
    'username': null,
    'password': null,
    'repo': null
  },

  isLoggedIn: function() {
    return (this.get("username") != null);
  }
})