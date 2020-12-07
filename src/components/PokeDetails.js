import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function PokeDetails(props) {

    let [name, setName] = useState('');
    let [image, setImage] = useState('');


    // How we useEffect as ComponentDidUpdate by not having an initial value (in line 19)
    useEffect(()=>{
        let id = props.match.params.id
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res)=>{
              const {sprites:{ other:{ dream_world } } } = res.data
              setName(name=res.data.name)
              setImage(image=dream_world.front_default)
          })
      })

      console.log('HERE',name,image)
    return (
        <div>
            <h1>{name}</h1>
            <img src={image}/>
        </div>
    )
}
