import './index.scss';
import { useState} from 'react';

export default function CardProjeto(props){

    const [ampliarImagem,setAmpliarImagem]=useState(false);

    const [conhecimentosUsados]=useState(props.conhecimentos); //passar um array aqui
    const [imagemAmpliada,setImagemAmpliada]=useState(0);

    return(

        <div className='card-projeto'>

            {ampliarImagem && 
                <div className='ampliar-imagem'>

                    <div className='container-imagem'>
                        <img src={props.imagens[imagemAmpliada]} alt='imagem projeto'/>

                        <div className='sub-container-buttons'>

                            <button onClick={() => {setAmpliarImagem(false)}}>
                                <svg width="36" height="40" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.0342 6.32981C50.5054 4.69066 50.271 2.25604 48.5004 0.894096C46.7297 -0.467846 44.0997 -0.2509 42.6285 1.38825L25 20.9737L7.37147 1.38825C5.90026 -0.2509 3.2703 -0.467846 1.49963 0.894096C-0.27103 2.25604 -0.505382 4.69066 0.965832 6.32981L19.5708 27L0.965832 47.6702C-0.505382 49.3093 -0.27103 51.744 1.49963 53.1059C3.2703 54.4678 5.90026 54.2509 7.37147 52.6117L25 33.0263L42.6285 52.6117C44.0997 54.2509 46.7297 54.4678 48.5004 53.1059C50.271 51.744 50.5054 49.3093 49.0342 47.6702L30.4292 27L49.0342 6.32981Z" fill="white"/>
                                </svg>
                            </button>

                            <button id='alterar-imagem-ampliada' onClick={() => {

                                imagemAmpliada+1===props.imagens.length ? setImagemAmpliada(0) 
                                : setImagemAmpliada(imagemAmpliada+1);

                                }}>
                                <svg width="50" height="36" viewBox="0 0 448 386" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M438.6 215.6C451.1 203.1 451.1 182.8 438.6 170.3L278.6 10.3C266.1 -2.19995 245.8 -2.19995 233.3 10.3C220.8 22.8 220.8 43.1 233.3 55.6L338.8 161H32C14.3 161 0 175.3 0 193C0 210.7 14.3 225 32 225H338.7L233.4 330.4C220.9 342.9 220.9 363.2 233.4 375.7C245.9 388.2 266.2 388.2 278.7 375.7L438.7 215.7L438.6 215.6Z" fill="white"/>
                                </svg>
                            </button>      

                            <span></span>                     
                        </div>
                    </div>                   
                </div>
            }

            <div className='container-link-linguagens'>

                <div className='sub-container-link-linguagens'>
                    <a href={props.link}>{props.link}</a>

                    <div className='container-imagens'>
                        {conhecimentosUsados.map(item => 
                            <img src={item} alt=''/> 
                        )}
                    </div>
                </div>
            </div>

            <div className='container-detalhes-projeto'>

                <button className='button-imagem'  onClick={() => {setAmpliarImagem(true)}}>
                    <img src={props.imagens[0]} alt='imagem projeto'/>
                </button>

                <div className='container-desc-links'>
                    <p>{props.descricao} </p> 
                    {props.protipagem.length>0 && 
                        <a href={props.protipagem}>{props.textoProtipagem}</a>
                    }

                    {props.repository1.length>0 &&
                        <a href={props.repository1}>{props.textoRepo1}</a>  
                    } 

                    {props.repository2.length>0 && 
                        <a href={props.repository2}>{props.textoRepo2}</a>   
                    }  
                </div>    
            </div>
        </div>
    );
}