var nid = 1;
Meteor.call("get", nid, function(err, data) {
  if (err) {
    console.log(err);
  }
  Session.set('node', data);
});

Template.edit.helpers({
  title: function() {
    return Session.get('node').title;
  }
});

Template.editor.helpers({
  docid: function() {
    return nid.toString();
  }
});

Template.edit.events = {
  "keydown #editor": function(e) {
    if (e.keyCode !== 27) {
      return;
    }
    var node = Session.get('node');
    e.preventDefault();
    $(e.target).blur();
    if ($('#title').val() != node.title) {
      node.title = $('#title').val();
    }
    node.body = e.target.value;
    Meteor.call('update', node);
    return;
  }
};
