import './index.scss';
import { useState} from 'react';

export default function CardProjeto(props){

    const [detalhesProjeto,setDetalhesProjeto]=useState(false);
    const [mostrarBotao1,setMostrarBotao1]=useState(true);
    const [mostrarBotao2,setMostrarBotao2]=useState(false);

    function mostrarDetalhes(){


        setDetalhesProjeto(!detalhesProjeto);
    }

    function animarBotao(e){

        e.style.animation="girarButton 0.5s";
        e.disabled=true;
    }

    function terminarAnimacao(e){

        setMostrarBotao1(!mostrarBotao1);
        setMostrarBotao2(!mostrarBotao2);
        e.style.animation = "none";
    }

    return(

        <div className='card-projeto' style={detalhesProjeto ? {height:"200px"} : {height:"80px"}}>

            <div className='container-link-linguagens'>

                <div className='sub-container-link-linguagens'>
                    <a href={props.link}>{props.link}</a>

                    <div className='container-imagens'>
                        <img src={props.conhecimento1} alt=''/>
                        <img src={props.conhecimento2} alt=''/>
                        <img src={props.conhecimento3} alt=''/>
                        <img src={props.conhecimento4} alt=''/>
                        <img src={props.conhecimento5} alt=''/>
                    </div>
                </div>

                {mostrarBotao1 && (
                    <button onClick={(e) => {animarBotao(e.target);mostrarDetalhes()}} onAnimationEnd={(e) => {terminarAnimacao(e.target)}}>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.44614 17.1214C10.3052 18.2929 11.7002 18.2929 12.5592 17.1214L21.3555 5.12612C21.9878 4.26396 22.1733 2.98009 21.8297 1.85553C21.4861 0.730965 20.6889 0 19.7956 0L2.20291 0.00937191C1.3164 0.00937191 0.512364 0.740337 0.168757 1.8649C-0.17485 2.98946 0.01757 4.27333 0.642934 5.13549L9.43927 17.1308L9.44614 17.1214Z" fill="white"/>
                        </svg>
                    </button>)}

                {mostrarBotao2 && (
                    <button onClick={(e) => {animarBotao(e.target);mostrarDetalhes()}} onAnimationEnd={(e) => {terminarAnimacao(e.target)}}>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5539 0.878563C11.6948 -0.292854 10.2998 -0.292854 9.44078 0.878563L0.644453 12.8739C0.0122172 13.736 -0.17333 15.0199 0.170276 16.1445C0.513883 17.269 1.31105 18 2.20443 18H19.7971C20.6836 18 21.4876 17.269 21.8312 16.1445C22.1749 15.0199 21.9824 13.736 21.3571 12.8739L12.5607 0.878563H12.5539Z" fill="white"/>
                        </svg>
                    </button>)}
            </div>

            <div className='container-detalhes-projeto' style={detalhesProjeto ? {zIndex:"0",opacity:"1"} : {zIndex:"-1",opacity:"0"}}>

                <figure className='frame-imagem'>
                    <img/>
                </figure>

                <p>Projeto inspirado no site netflix</p>
            </div>
        </div>
    );
}