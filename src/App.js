import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Route, Switch, Link} from 'react-router-dom';
import PokeDetails from './components/PokeDetails';
import ErrorPage from './components/ErrorPage';


export default function App() {

  let [pokemons,setList] = useState([]);

  // How we useEffect as ComponentDidMount by having an initial value of [] (in line 17)
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res)=>{
        setList(pokemons=res.data.results)
      })
  }, [])


  return (
    <div style={{display:'flex'}}>
      <div>
        {
          pokemons.map ((pokemon,index)=>{
            return <Link to={`/pokemons/${index+1}`}><p>{pokemon.name}</p></Link>
          })
        }
      </div>
      <Switch>
        <Route path="/pokemons/:id" component={PokeDetails} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      
    </div>
  )
}
