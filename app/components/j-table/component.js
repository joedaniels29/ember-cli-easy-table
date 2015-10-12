import Ember from 'ember';

export default Ember.Component.extend({


    showPageNumbers:Ember.computed.alias("displayDelegate.showPageNumbers"),
    pagination: Ember.computed.alias("displayDelegate.pagination")

});
