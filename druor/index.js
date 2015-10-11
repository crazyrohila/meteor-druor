Router.route('/', {
  template: 'home',
  name: 'home'
});

Router.route('node/:nid/view', {
  name: 'view',
  template: 'view'
});

Router.route('node/:nid/edit', {
  name: 'edit',
  template: 'edit'
});
