import React, {Component} from 'react';
import {Container} from 'flux/utils';
import $ from 'jquery';
import Actions from '../Actions';
import pokemonsListStore from '../stores/PokemonsListStore';
import PokemonListItem from './PokemonListItem.js';

class PokemonsListComponent extends Component {

  constructor(props) {
    super(props);
    Actions.getPokemonsList(props.paramPage);
  }

  static getStores() {
    return [pokemonsListStore];
  }

  static calculateState(prevState) {
    var s = pokemonsListStore.getState();
    return s;
  }

  showButtonReady() {
    $('.button-disabled').hide();
    $('.button').show();
  }

  showButtonSpinner() {
    $('.button').hide();
    $('.button-disabled').show();
  }
  hideRightPane() {
    $('.rightpane').hide();
  }

  componentDidMount() {
    if (this.state.loading) {
      this.showButtonSpinner();
    } else {
      this.showButtonReady();
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      this.showButtonSpinner()
    } else {
      this.showButtonReady();
    }
  }

  onClickNext = evt => {
    this.hideRightPane();
    Actions.getPokemonsList(this.state.page+1);
    $(evt.target).blur();
  };

  render() {
    var pokemonsList;
    if (this.state.pokemons.length) {
      pokemonsList = this.state.pokemons.map(function(pokemon, index) {
        return (
          <PokemonListItem pokemon={pokemon} key={index} />
        );
      });
    } else {
      pokemonsList = <p>Loading...</p>;
    }
    return (
      <div>
        <div className="pokedex">
          {pokemonsList}
        </div>
        <button className="button" onClick={this.onClickNext}>Load More</button>
        <button className="button-disabled" style={{display:'none'}}>&nbsp; &nbsp;</button>
      </div>
    );
  }
}

const PokemonsList = Container.create(PokemonsListComponent);
export default PokemonsList;
