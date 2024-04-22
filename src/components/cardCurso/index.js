import { useState } from 'react';
import './index.scss';

export default function CardCurso(props){

    const[mostrarDetalhesCurso,setMostrarDetalhesCurso]=useState(false);
    return(

        <div className='card-curso'>

            <h3>{props.curso}</h3>
            <p> <span>Status:</span> {props.status}</p>
            <p> <span>Instituição:</span> {props.instituicao}</p>

            <button onClick={() => {setMostrarDetalhesCurso(!mostrarDetalhesCurso)}}>Ver mais sobre</button>

            {mostrarDetalhesCurso && ( 
                <p id='descricao' style={mostrarDetalhesCurso ? {zIndex:"0",opacity:"1"} : {zIndex:"-1",opacity:"0"}}> <span>Descrição:</span> {props.descricao}</p>)}
        </div>
    );
}