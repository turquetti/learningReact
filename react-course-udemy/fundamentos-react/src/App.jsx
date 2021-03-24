import React from 'react'
import './App.css'

import Familia from './components/basics/Familia'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layouts/Card'

export default props => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo = "#05 - Componente com Filhos" color="#00C8F8" >
                    <Familia sobrenome="Silva"></Familia>
                </Card>
                <Card titulo = "#04 - Desafio Aleatório" color="#FA6900" >
                    <Aleatorio min={1} max={60}></Aleatorio>
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>

                <Card titulo = "#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo = "#02 - Com Parametro" color="#E8B71A">
                    <ComParametro 
                titulo="Situação do Aluno" 
                aluno="Gabriela" 
                nota={9.4}>

                    </ComParametro>
                </Card>

                <Card titulo = "#01 - Boas Vindas" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>

                </div>
            
        </div>
    )
}



