var AppView = Backbone.View.extend({
  
  session: null,

  template: JST["templates/app_view"],

  el: '#app-view',

  events: {
    'click #pages'    : 'showPages',
    'click #posts'    : 'showPosts',
    'click #add-page' : 'addPage',
    'click #add-post' : 'addPost'
  },

  pages: new Pages(),
  posts: new Posts(),

  initialize: function() {
    this.session = this._getSession();

    this.session.bind('change', this.render, this);

    this.pages.bind('add', this.updatePagesCounter, this);
    this.pages.bind('change', this.updatePagesCounter, this);
    this.pages.bind('remove', this.updatePagesCounter, this);

    this.pagesView = new PagesView({collection: this.pages});
    this.postsView = new PostsView({collection: this.posts});
  },

  render: function() {  
    if (!this.session.isLoggedIn()) {
      $("#work-area").html(new LoginView({model: this.session}).render().el);
    } else {
      $("#work-area").html(this.template());
      $("#actions").append($("<a>", { id: 'add-page', 'class': 'btn btn-primary'}).text("+ Add a Page"));
      $("#actions").append($("<a>", { id: 'add-post', 'class': 'btn btn-primary'}).text("+ Add a Post"));
    }

    return this;
  },

  showPages: function(e) {
    e.preventDefault();
    $("#details-pane").html(this.pagesView.render().el);
  },

  showPosts: function(e) {
    e.preventDefault();
    $("#details-pane").html(this.postsView.render().el);
  },

  addPage: function(e) {
    e.preventDefault();
    this.pages.add();
  },

  addPost: function(e) {
    e.preventDefault();
    this.posts.add();
  },

  updatePagesCounter: function() {
    var count = this.pages.filter(function(page) { return page.get('status') != 'published' }).length;
    $("#pages span.label").remove();
    $("#pages").append($("<span />", {'class': 'label label-important'}).text(count));
  },

  _getSession: function() {
    return new Session();
  }
});