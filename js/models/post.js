var Post = Backbone.Model.extend({
  defaults: {
    published: false,
    name: 'New Post'
  }
});

var Posts = Backbone.Collection.extend({
  model: Post
});