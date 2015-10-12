import Ember from 'ember';

export default Ember.Component.extend({

    didReceiveAttrs() {
        this.get("table").set("displayDelegate", this);
    },
    tagName:"tbody",
    model: Ember.computed.alias("table.model"),
    page:1,
    pages:Ember.computed("model", "pageLength", function(){
       // make sure to include the last len % pageLen models!
       return Math.ceil(this.get("model.length") / this.get("pageLength"));
    }),
    showPageNumbers:true,
    pagination:true,
    defaultPaginationLength:10,
    pageLength:10,

    currentModels:Ember.computed("page", "pageLength", "model", function(){
        //zero Index the pages!
        var page = this.get("page") - 1;
        var pageLength = this.get("pageLength");
        return this.get("model") ? this.get("model").slice(page*pageLength ,page*pageLength + pageLength) : null
    })
});
