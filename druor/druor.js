if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.route('/', {
  template: 'home',
  name: 'home'
});

Router.route('/view', {
  name: 'view',
  template: 'view'
});

Router.route('/edit', {
  name: 'edit',
  template: 'edit'
});
