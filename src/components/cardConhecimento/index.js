import './index.scss';

export default function CardConhecimento(props){

    return(

        <div className='card-conhecimento'>

            <img src={props.logo} alt='logo linguagem'/>

            <p>{props.nome}</p>
        </div>
    );
}