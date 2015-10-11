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
