var PagesView = Backbone.View.extend({
  tagName: "section",
  className: 'pages',
  template: JST['templates/pages_list'],
  itemTemplate: JST['templates/page'],

  events: {
    'click .edit-page' : 'launchEditor',
  },

  initialize: function() {
    this.collection.bind("add", this.addPage, this);
    this.collection.bind("remove", this.removePage, this);
    this.collection.bind("reset", this.resetPages, this);
  },

  render: function() {
    $(this.el).html(this.template({collection: this.collection}));
    $("sideNav > li").removeClass("active", "fast");
    $("#pages").closest("li").addClass("active", "fast");
    return this;
  },

  addPage: function(page) {
    $(this.el).find(".list").append(this.itemTemplate({page: page})); 
  },

  removePage: function() {
    console.log("page removed");
  },

  resetPages: function() {
    this.render();
  },

  launchEditor: function() {
    console.log("editor");
  }
});