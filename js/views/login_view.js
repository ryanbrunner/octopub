var LoginView = Backbone.View.extend({
  tagName: "div",
  className: 'login-area',
  template: JST["templates/login_view"],

  events: {
    'submit form' : 'login'
  },

  render: function() {
    $(this.el).html(this.template());

    return this;
  },

  login: function(e) {
    e.preventDefault();

    var $form = $(e.target),
        $userName = $form.find("input[name='username']"),
        $password = $form.find("input[name='password']");

    this.model.set({username: $userName.val(), password: $password.val()});
  }
})