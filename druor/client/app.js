var nid = 1;
// Meteor.call('getNodeFromUrl', "http://dev-druor.pantheon.io/rest/view/node/1", function(err, data) {
//   var keys = [];
//   var node = JSON.parse(data);
//   Meteor.call("get", node.nid, function(err, data) {
//     if (err) {
//       console.log(err);
//     }
//     node = data;
//   });
//   Meteor.call('insert', data);
// });
Meteor.call("get", nid, function(err, data) {
  if (err) {
    console.log(err);
  }
  if (data && data.nid) {
    Session.set('node', data);
  }
  else {
    Meteor.call('getNodeFromUrl', 'http://dev-druor.pantheon.io/rest/view/node/'+nid, function(err, data) {
      if (err) {
        return;
      }
      var keys = [];
      var node = JSON.parse(data);
      Meteor.call('insert', node);
      Session.set('node', node);
    });
  }
});

Template.edit.helpers({
  title: function() {
    return Session.get('node').title;
  },
  body: function() {
    return Session.get('node').body['und'][0]['value'];
  }
});

Template.editor.helpers({
  nid: function() {
    return nid.toString();
  }
});

Template.edit.events = {
  "ready document": function(e) {
    alert('sdaff');
  },
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
    node.body['und'][0]['value'] = e.target.value;
    node.body['und'][0]['safe_value'] = e.target.value;
    Meteor.call('update', node);
    return;
  },
  // "click #submit": function(e) {
  //   if (e.keyCode !== 27) {
  //     return;
  //   }
  //   var node = Session.get('node');
  //   e.preventDefault();
  //   $(e.target).blur();
  //   if ($('#title').val() != node.title) {
  //     node.title = $('#title').val();
  //   }
  //   node.body['und'][0]['value'] = $('#editor').val();
  //   node.body['und'][0]['safe_value'] = $('#editor').val();
  //   Meteor.call('update', node);
  //   Meteor.call('updateDrupal', "http://dev-druor.pantheon.io/rest/update/node/", node);
  //   return;
  // }
};
