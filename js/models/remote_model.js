// 
// Adds functionality to Backbone.Model that enables dealing with models on remote sites.
//   - All GET requests will be sent as JSONP
//   - All POST requests will be handled by a form in an IFRAME.
//   - PUT, DELETE, etc. requests are not directly supported, but RemoteModel will follow the Rails convention of including a method
//     parameter in the request.
var RemoteModel = Backbone.Model.extend({

  sync: function(method, model, options) {
    // Ensure that GET requests are sent as JSONP requests.
    _.extend(options, { dataType: 'jsonp'} );

    Backbone.sync(method, model, options);
  }
});

var RemoteCollection = Backbone.Collection.extend({
  sync: function(method, model, options) {
    // Ensure that GET requests are sent as JSONP requests.
    _.extend(options, { dataType: 'jsonp'} );

    Backbone.sync(method, model, options);
  }
})