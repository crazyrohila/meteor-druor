Docs = new Meteor.Collection("nodes");

if (Meteor.isClient) {

  Template.editor.helpers({
    docid: function() {
      return "1";
    },
    title: function() {
      return (ref = Docs.findOne("1")) != null ? ref.title : void 0;
    }
  });

  Template.editor.events = {
    "keydown #editor": function(e) {
      var id = "1";
      if (e.keyCode !== 27) {
        return;
      }
      e.preventDefault();
      $(e.target).blur();
      var title = (ref = Docs.findOne("1")) != null ? ref.title : void 0;
      return Docs.update(id, {
        title: title,
        body: e.target.value
      });
    }
  };
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
