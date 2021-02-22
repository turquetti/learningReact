import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layouts/Card'

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo = "#04 - Desafio Aleatório">
                <Aleatorio min={1} max={60}></Aleatorio>
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo = "#03 - Fragmento">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo = "#02 - Com Parametro">
                <ComParametro 
            titulo="Situação do Aluno" 
            aluno="Gabriela" 
            nota={9.4}>

                </ComParametro>
            </Card>

            <Card titulo = "#01 - Boas Vindas">
                <Primeiro></Primeiro>
            </Card>
        </div>
    )
}



