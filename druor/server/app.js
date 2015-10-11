Docs = new Mongo.Collection("nodes");
Meteor.methods({
  insertRecords: function(url) {
      console.log(url);
      // Docs.insert({
      //   _id: data.nid.toString(),
      // });
  },
  getTitle: function(nid) {
    return (ref = Docs.findOne({nid: nid})) != null ? ref.title : void 0;
  },
  get: function(nid) {
    return Docs.findOne({nid: nid});
  },
  insert: function(node) {
    Docs.insert({
      _id: node.nid.toString(),
      nid: node.nid,
      title: node.title,
      body: node.body
    });
  },
  update: function(node) {
    var id = node.nid.toString();
    Docs.update(id, {
      nid: node.nid,
      title: node.title,
      body: node.body
    });
  }
});
