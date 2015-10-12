import Ember from 'ember';

export default Ember.Component.extend({
    tagName:"tr",
    classNameBindings:["selected:selected:"],
    click() {
        this.sendAction();
    }
});
