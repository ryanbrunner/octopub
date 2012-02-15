var Page = Backbone.Model.extend({
  defaults: {
    state: 'new',
    name: 'New Page',
    updated_at: new Date()
  }
});

var Pages = Backbone.Collection.extend({
  model: Page
});