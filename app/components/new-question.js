import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        quester: this.get('quester'),
        quest: this.get('quest'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false),
      this.sendAction('save2', params);
    }
  }
});
