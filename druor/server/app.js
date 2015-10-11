Docs = new Mongo.Collection("nodes");
Meteor.methods({
  getNodeFromUrl: function(url) {
    this.unblock();
    var result = Meteor.http.call("GET", url);
    if (result.statusCode == 200) {
      return result.content;
    }
  },
  getTitle: function(nid) {
    if (typeof(nid != "string")) {
      nid = nid.toString();
    }
    return (ref = Docs.findOne({_id: nid})) != undefined ? ref.node.title : void 0;
  },
  get: function(nid) {
    if (typeof(nid != "string")) {
      nid = nid.toString();
    }
    var result = Docs.findOne({_id: nid});
    return result.node;
  },
  insert: function(node) {
    var nid = node.nid;
    Docs.insert({
      _id: nid,
      node: node
    });
  },
  update: function(node) {
    Docs.update(node.nid, {
      node: node
    });
  },
  updateDrupal: function(url, node) {
    this.unblock();
    var result = Meteor.http.call("POST", url, node);
  }
});
