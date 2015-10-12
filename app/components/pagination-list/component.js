import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings:[":pagination"],
    pages:Ember.computed.alias("attrs.pages")
});
