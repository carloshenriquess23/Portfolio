import './index.scss';

export default function CardConhecimento(props){

    return(

        <div className='card-conhecimento'>

            <img src={props.logo}/>

            <p>{props.nome}</p>
        </div>
    );
}