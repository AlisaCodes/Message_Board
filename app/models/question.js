import DS from 'ember-data';

export default DS.Model.extend({
  quester: DS.attr(),
  quest: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasmany('answer', {async: true})
});
