import $ from 'jquery';
import {ReduceStore} from 'flux/utils';
import ActionTypes from '../ActionTypes';
import dispatcher from '../AppDispatcher';

const _url = 'http://pokeapi.co/api/v1/pokemon/?limit=%limit%&offset=%offset%';
const _limit = 12;
const _props = ['pkdx_id', 'name', 'attack', 'defense', 'hp', 'sp_atk', 'sp_def', 'speed', 'weight', 'types', 'moves'];

class PokemonsListStore extends ReduceStore {

    getInitialState() {
        return {page:-1, pokemons:[], loading:false, error:false};
    }

    getCurrentPage() {
        return this.getState().page;
    }

    reduce(state, payload) {
        var newstate = $.extend({}, state);
        switch (payload.type) {
            //set state 'pokemons loading'
            case ActionTypes.PokemonsListPending:
                if (parseInt(state.page, 10) !== parseInt(payload.page)) {
                    newstate.loading = true;
                    var url = _url.replace('%offset%', payload.page*_limit).replace('%limit%', _limit);
                    $.ajax(url, {
                        method:'GET',
                        dataType:'json',
                        crossDomain: true
                    }).done(function(r) {
                        setTimeout(function(){
                            dispatcher.dispatch({ type: ActionTypes.PokemonsListDone, responce: r, page: payload.page });
                        },800);
                    }).fail(function(r) {
                        setTimeout(function(){
                            dispatcher.dispatch({ type: ActionTypes.PokemonsListFail, responce: r });
                        },800);
                    });
                }
                break;

            //set state 'pokemons loaded'
            case ActionTypes.PokemonsListDone:
                newstate.page = payload.page;
                newstate.loading = false;
                if ('undefined'!==typeof payload.responce.objects && $.isArray(payload.responce.objects)) {
                    newstate.pokemons = [];
                    var pok;
                    payload.responce.objects.forEach(function(obj) {
                        pok = {};
                        _props.forEach(function(prop) {
                            if (prop==='pkdx_id') pok.id = obj.pkdx_id;
                            if (prop==='types') {
                                var types = [];
                                obj.types.forEach(function (ty) {
                                    types.push(ty.name);
                                });
                                pok.types = types;
                            } else if (prop==='moves') {
                                pok.moves = obj.moves.length;
                            } else {
                                pok[prop] = obj[prop];
                            }
                        });
                        newstate.pokemons.push(pok);
                    });
                }
                break;

            //set state 'pokemons load error'
            case ActionTypes.PokemonsListFail:
                newstate.loading = false;
                newstate.pokemons = [];
                newstate.error = true;
                break;

            //set state 'pokemon details loading'
            case ActionTypes.PokemonDetailsPending:
                //newstate.loadingDetails = true;
                newstate.pokemon = null;
                for (var i=0; i<state.pokemons.length; i++) {
                    if (state.pokemons[i].id === parseInt(payload.id, 10)) {
                        newstate.pokemon = state.pokemons[i];
                        break;
                    }
                }
                break;

            //set state 'pokemon details loaded', not really used
            case ActionTypes.PokemonDetailsDone:
                //newstate.loadingDetails = false;
                break;

            //set state 'pokemon details load error', not really used
            case ActionTypes.PokemonDetailsFail:
                //newstate.loadingDetails = false;
                break;
        }
        return newstate;
    }
}

const pokemonsListStore = new PokemonsListStore(dispatcher);
export default pokemonsListStore;