import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'


ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Gabriela" nota={9.4}></ComParametro>
        <Fragmento></Fragmento>
    </div>, 
    document.getElementById('root')
)

