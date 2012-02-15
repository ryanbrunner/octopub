var PostsView = Backbone.View.extend({
  tagName: "section",
  className: 'posts',

  initialize: function() {
    this.collection.bind("add", this.addPost, this);
    this.collection.bind("remove", this.removePost, this);
    this.collection.bind("reset", this.resetPosts, this);
  },

  addPost: function() {
    console.log("post added"); 
  },

  removePost: function() {
    console.log("post removed");
  },

  resetPosts: function() {
    console.log("posts reset");
  }
});