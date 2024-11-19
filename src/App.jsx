import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card.jsx'

function App() {
  // Carregamento de dados via código
    // const item1 = {
    //   name: 'Rick Sanches',
    //   status: 'Vivo',
    //   specie: 'Humana',
    //   origin: 'Terra C-137',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    // }
    // const item2 = {
    //   name: 'Morty Smith',
    //   status: 'Morto',
    //   specie: 'Humana',
    //   origin: 'Terra C-137',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    // }
    // const item3 = {
    //   name: 'Summer Smith',
    //   status: 'Viva',
    //   specie: 'Humana',
    //   origin: 'Terra C-137',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    // }
    // const item4 = {
    //   name: 'Beth Smith',
    //   status: 'Viva',
    //   specie: 'Humana',
    //   origin: 'Terra C-137',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    // }
  // const itens = [item1, item2, item3, item4]

  // Carregamento de dados via api
  const [itens, setItens] = useState([])

  async function carregarDadosApi(){
    const apiUrl = 'https://rickandmortyapi.com/api/character/'
  
    const response = await fetch(apiUrl)
    const body = await response.json()
    const results = body.results
    console.log(results)
    setItens(results)
  }

  useEffect(function(){
    carregarDadosApi()
  },[])

  return (
    <>
      <div className='Cards'>
        {itens.map((item, i) => <Card item={item} key={i}/>) }
      </div>
    </>
  )
}

export default App
