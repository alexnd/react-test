import React, {Component} from 'react';
import $ from 'jquery';
import Actions from '../Actions';
import pokemonsListStore from '../stores/PokemonsListStore';

function ucFirst(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
}

var _unlocked = false;

class PokemonListItem extends React.Component {

  componentDidMount() {
    $('img').load(function(){ $(this).parent('.pokemon-no-img').removeClass('pokemon-no-img'); });
  }

  onClickDetails = evt => {
    if (_unlocked) {
      var id = $(evt.currentTarget).attr('data-id');
      Actions.getPokemonDetails(id);
      $('.rightpane').show();
    } else _unlocked = true;
  };

  render() {
    return (
      <a href={'#/' + this.props.pokemon.id + ',' + pokemonsListStore.getCurrentPage()} className="pokemon-list-node" data-id={this.props.pokemon.id} key={'pokemon-node-' + this.props.key} onClick={this.onClickDetails}>
        <div className="pokemon-img pokemon-no-img"><img src={'http://pokeapi.co/media/img/'+this.props.pokemon.id+'.png'}/></div>
        <div className="pokemon-name">{this.props.pokemon.name}</div>
        <div className="pokemon-types">{this.props.pokemon.types.map((ty, ix) =>
          <div className={'pokemon-type pokemon-type-'+ty} key={ix + 1}>{ucFirst(ty)}</div>
        )}</div>
      </a>
    );
  }
}

export default PokemonListItem;
