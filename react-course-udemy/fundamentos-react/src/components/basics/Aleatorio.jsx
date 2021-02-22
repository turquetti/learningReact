import React from 'react'

export default (props) => {
    const min = props.min
    const max = props.max
    let aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor mínimo: {props.min}</p>
            <p>Valor máximo: {props.max}</p>
            <p>Valor escolhido: {aleatorio}</p>
        </div>
    )
}