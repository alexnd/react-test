import React, {Component} from 'react';
import {Container} from 'flux/utils';
import $ from 'jquery';
import Actions from '../Actions';
import pokemonsListStore from '../stores/PokemonsListStore';

class PokemonDetailsComponent extends Component {

  constructor(props) {
    super(props);
    Actions.getPokemonDetails(props.paramId);
  }

  static getStores() {
    return [pokemonsListStore];
  }

  static calculateState(prevState) {
    var s = pokemonsListStore.getState();
    return s;
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('PokemonDetailsComponent shouldComponentUpdate', nextProps, nextState);
    return true;
  }*/

  render() {
    return (
      <div className="pokemon-details">
        <div className="pokemon-name">{this.state.pokemon.name}</div>
        <div className="pokemon-img"><img src={'http://pokeapi.co/media/img/'+this.state.pokemon.id+'.png'}/></div>
        <table className="pokemon-props">
          <tbody>
            <tr>
              <td className="pokemon-props-col1">Type</td>
              <td className="pokemon-props-col2">Fire</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">Attack</td>
              <td className="pokemon-props-col2">{this.state.pokemon.attack}</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">Defense</td>
              <td className="pokemon-props-col2">{this.state.pokemon.defense}</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">HP</td>
              <td className="pokemon-props-col2">{this.state.pokemon.hp}</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">SP Attack</td>
              <td className="pokemon-props-col2">{this.state.pokemon.sp_atk}</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">SP Defence</td>
              <td className="pokemon-props-col2">{this.state.pokemon.sp_def}</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">Speed</td>
              <td className="pokemon-props-col2">{this.state.pokemon.speed}</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">Weight</td>
              <td className="pokemon-props-col2">{this.state.pokemon.attack}</td>
            </tr>
            <tr>
              <td className="pokemon-props-col1">Total moves</td>
              <td className="pokemon-props-col2">{this.state.pokemon.moves}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const PokemonDetails = Container.create(PokemonDetailsComponent);
export default PokemonDetails;
