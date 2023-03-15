import React from 'react'
import { Pokemon } from '../interface';
interface Props {
    pokemons: Pokemon[]
}



export const PokemonColection:React.FC<Props> = (props) => {
    const {pokemons} = props
  return (
    <div>
        Polemon Collection
    </div>
  )
};

export default PokemonColection;
