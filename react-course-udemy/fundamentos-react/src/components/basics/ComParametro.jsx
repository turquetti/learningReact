import React from 'react'

function ComParametro(props) {
    return (
        <div>
            <h2>{ props.titulo } </h2>
            <p>O {props.aluno} tem nota {props.nota}</p>
        </div>
    )
}

export default ComParametro