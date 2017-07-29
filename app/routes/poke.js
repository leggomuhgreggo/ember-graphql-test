import Ember from 'ember';
import UnsubscribeRoute from 'ember-apollo-client/mixins/unsubscribe-route';
import gql from 'graphql-tag'
import query from 'quickstart/gql/queries/pokemons';


export default Ember.Route.extend(UnsubscribeRoute, {
  apollo: Ember.inject.service(),

  model() {
    return this.get('apollo').query({ query }, 'allPokemons');
  }
});
