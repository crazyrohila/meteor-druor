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
