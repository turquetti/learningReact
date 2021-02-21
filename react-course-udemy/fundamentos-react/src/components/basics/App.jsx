import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'

export default function App(props) {
    return (
        <div id="app">
            <Primeiro></Primeiro>
            <ComParametro titulo="Situação do Aluno" aluno="Gabriela" nota={9.4}></ComParametro>
            <Fragmento></Fragmento>
        </div>
    )
}



