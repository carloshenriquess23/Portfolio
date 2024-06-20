import { useState } from 'react';
import './index.scss';

export default function CardCurso(props){

    const[mostrarDetalhesCurso,setMostrarDetalhesCurso]=useState(false);
    return(

        <div className='card-curso' style={mostrarDetalhesCurso ? {maxHeight:"500px"} : {maxHeight:"180px"}}>

            <h3>{props.curso}</h3>
            <p> <span>Status:</span> {props.status}</p>
            <p> <span>Instituição:</span> {props.instituicao}</p>

            <button onClick={() => {setMostrarDetalhesCurso(!mostrarDetalhesCurso)}}>{mostrarDetalhesCurso ? "Ver menos" : "Ver mais sobre"}</button>

            {mostrarDetalhesCurso && (
                <p id='descricao'> <span>Descrição:</span> {props.descricao}</p>)}
        </div>
    );
}