import $ from 'jquery';
import ActionTypes from 'ActionTypes';
import dispatcher from 'AppDispatcher';

export default class Actions {
    static getPokemonsList(n) {
        //console.log('dispatch PokemonsListPending');
        dispatcher.dispatch({ type: ActionTypes.PokemonsListPending, page: n });
    }
    static getPokemonDetails(id) {
        //console.log('dispatch PokemonDetailsPending');
        dispatcher.dispatch({ type: ActionTypes.PokemonDetailsPending, id: id });
    }
}
